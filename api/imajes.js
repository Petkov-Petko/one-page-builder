const requestCounts = new Map();
const RATE_LIMIT = 5; // Max 5 requests per minute
const TIME_WINDOW = 60000; // 1 minute

// Mock base64 image (1x1 red pixel PNG)
const MOCK_IMAGE_B64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight OPTIONS request
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

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    console.log("🎭 MOCK: Generating image for prompt:", prompt);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate different colored pixels based on prompt
    let mockImage = MOCK_IMAGE_B64; // default red

    if (prompt.toLowerCase().includes("blue")) {
      // Blue pixel
      mockImage =
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";
    } else if (prompt.toLowerCase().includes("green")) {
      // Green pixel
      mockImage =
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPjPAAMAAAGAAP8jjhkjAAAAAElFTkSuQmCC";
    } else if (
      prompt.toLowerCase().includes("business") ||
      prompt.toLowerCase().includes("professional")
    ) {
      // Slightly larger mock "business" image (still tiny but different)
      mockImage =
        "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQIHWNk+M9QDwTM/xkYGBhAAQAAGQABAKJTJfIAAAAASUVORK5CYII=";
    }

    console.log("🎭 MOCK: Image generated successfully");

    // Return in OpenAI format
    const data = {
      data: [
        {
          b64_json: mockImage,
          revised_prompt: prompt, // OpenAI sometimes returns this
        },
      ],
    };

    res.status(200).json(data);
  } catch (err) {
    console.error("Mock API error:", err);
    res.status(500).json({ error: err.message });
  }
}
