const requestCounts = new Map();
const RATE_LIMIT = 5;
const TIME_WINDOW = 60000;
import sharp from "sharp";

async function enhancePromptWithGPT4oMini(originalPrompt, apiKey) {
  const enhanceSystemPrompt = `You are an expert at creating prompts for DALL-E image generation. Enhance a basic prompt to make a professional, high-quality image prompt.
Rules:
1. Keep main subject and website topic.
2. Add photography, lighting, and composition details.
3. Make prompts concise (under 200 words).
4. Make images professional and business/website-appropriate.
5. NO text, NO letters, NO words in images.
6. Focus on visual elements only.
Enhance this prompt:`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: enhanceSystemPrompt,
          },
          {
            role: "user",
            content: originalPrompt,
          },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error("GPT-4o Mini enhancement failed, using original prompt");
      return originalPrompt;
    }

    const data = await response.json();
    const enhancedPrompt = data.choices[0].message.content.trim();

    // Ensure it's not too long
    return enhancedPrompt.length > 800
      ? enhancedPrompt.substring(0, 797) + "..."
      : enhancedPrompt;
  } catch (error) {
    console.error("Error enhancing prompt with GPT-4o Mini:", error);
    return originalPrompt;
  }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const clientIP =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const now = Date.now();

  if (!requestCounts.has(clientIP)) {
    requestCounts.set(clientIP, []);
  }
  const requests = requestCounts.get(clientIP);
  const recentRequests = requests.filter((time) => now - time < TIME_WINDOW);

  if (recentRequests.length >= RATE_LIMIT) {
    return res.status(429).json({
      error: "Rate limit exceeded. Max 5 images per minute.",
    });
  }

  recentRequests.push(now);
  requestCounts.set(clientIP, recentRequests);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { prompt, size = "1024x1024", enhancePrompt = true } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  if (!process.env.P_KEY) {
    return res.status(500).json({
      error:
        "PBN API key not configured. Please add P_KEY to your Vercel environment variables.",
    });
  }

  try {
    let finalPrompt = prompt;

    if (enhancePrompt) {
      console.log("🧠 Enhancing prompt with GPT-4o Mini...");
      console.log("📝 Original prompt:", prompt);

      finalPrompt = await enhancePromptWithGPT4oMini(
        prompt,
        process.env.P_KEY
      );

      console.log("✨ Enhanced prompt:", finalPrompt);
    }

    const requestBody = {
      model: "gpt-image-1",
      prompt: finalPrompt,
      n: 1,
      size,
      quality: "low",
      output_format: "jpeg",
      output_compression: 30,
    };

    console.log("🟢 Sending request to GPT-Image-1:", {
      ...requestBody,
      prompt: finalPrompt.substring(0, 100) + "...",
    });

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.P_KEY}`,
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("🔴 OpenAI GPT-Image-1 API error:", errorData);
      throw new Error(
        errorData.error?.message || `OpenAI API error: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("🟢 GPT-Image-1 response received successfully");

    if (data.data && data.data[0] && data.data[0].b64_json) {
      const imageData = data.data[0].b64_json;

      const buffer = Buffer.from(imageData, "base64");

      // Преоразмеряване до 320x320 px
      const resizedBuffer = await sharp(buffer)
        .resize(320, 320, { fit: "cover" }) 
        .toFormat("jpeg", { quality: 80 })
        .toBuffer();

      const resizedBase64 = resizedBuffer.toString("base64");

      res.status(200).json({
        data: [
          {
            b64_json: resizedBase64,
            revised_prompt: finalPrompt,
            original_prompt: prompt,
            format: "jpeg",
            width: 320,
            height: 320,
            model: "gpt-image-1",
            quality: "low",
          },
        ],
      });
    } else {
      console.error("🔴 Unexpected response structure:", data);
      throw new Error("Invalid response from GPT-Image-1 API");
    }
  } catch (err) {
    console.error("GPT-Image-1 error:", err);
    res.status(500).json({ error: err.message });
  }
}
