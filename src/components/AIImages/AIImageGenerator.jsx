import { useState } from "react";

function AIImageGenerator({ formData, onImageInsert }) {
  const [aiSettings, setAiSettings] = useState({
    websiteTopic: "",
    imageSize: "256x256",
    imageStyle: "natural",
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [imageFloat, setImageFloat] = useState("none");
  const [selectedTextInfo, setSelectedTextInfo] = useState(null);
  const [showImageStyles, setShowImageStyles] = useState(false);
  const [lastInsertedId, setLastInsertedId] = useState(null);
  const [editorAlt, setEditorAlt] = useState("");
  const [editorFloat, setEditorFloat] = useState("none");

  const extractRandomSectionFromContent = (htmlContent) => {
    if (!htmlContent) return null;

    // Find all H2 sections with their content
    const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
    const sections = [];
    let match;

    // Extract all H2 headings
    const h2Matches = [];
    while ((match = h2Regex.exec(htmlContent)) !== null) {
      h2Matches.push({
        heading: match[1].replace(/<[^>]*>/g, "").trim(), // Clean heading text
        startIndex: match.index,
        endIndex: match.index + match[0].length,
      });
    }

    console.log("Found H2 headings:", h2Matches);

    // For each H2, find ONLY the P elements that follow until the next H2
    for (let i = 0; i < h2Matches.length; i++) {
      const currentH2 = h2Matches[i];
      const nextH2 = h2Matches[i + 1];
      const startPos = currentH2.endIndex;
      const endPos = nextH2 ? nextH2.startIndex : htmlContent.length;
      const sectionContent = htmlContent.substring(startPos, endPos);

      const hasImmediateImage = /^\s*<img[^>]*>/i.test(sectionContent);
      // Collect paragraphs
      const pRegex = /<p[^>]*>(.*?)<\/p>/gi;
      const paragraphs = [];
      let pMatch;

      while ((pMatch = pRegex.exec(sectionContent)) !== null) {
        const cleanParagraph = pMatch[1].replace(/<[^>]*>/g, "").trim();
        if (cleanParagraph.length > 0) {
          paragraphs.push(cleanParagraph);
        }
      }

      // Only add section if it has paragraph content
      if (paragraphs.length > 0) {
        sections.push({
          heading: currentH2.heading,
          paragraphs: paragraphs,
          fullText: currentH2.heading + " " + paragraphs.join(" "),
          htmlStartPos: currentH2.startIndex,
          htmlEndPos: endPos,
          hasImage: hasImmediateImage,
        });
      }
    }

    if (sections.length === 0) {
      console.log("No sections with paragraphs found");
      return null;
    }

    const firstThree = sections.slice(0, 3);
    let availableSections = firstThree.filter((section) => !section.hasImage);

    if (availableSections.length === 0) {
      availableSections = sections.filter((section) => !section.hasImage);
    }

    // 🆕 If ALL sections have images, return special flag
    if (availableSections.length === 0) {
      console.log("All sections already have images!");
      return { allHaveImages: true };
    }

    // Pick random section from available ones
    const randomSection =
      availableSections[Math.floor(Math.random() * availableSections.length)];

    console.log("Selected section (no image):", randomSection);
    return randomSection;
  };

  const generateImageHTML = (
    imageData,
    { id = null, floatValue = imageFloat, altValue = imageData.alt } = {}
  ) => {
    let classes = "img-fluid rounded";
    switch (floatValue) {
      case "start":
        classes += " float-start me-3 mb-2";
        break;
      case "end":
        classes += " float-end ms-3 mb-2";
        break;
      case "center":
        classes += " d-block mx-auto mb-2";
        break;
      default:
        classes += " mb-2";
        break;
    }
    const altText =
      altValue && altValue.trim().length
        ? altValue.trim()
        : "AI generated image";
    const idAttr = id ? ` data-ai-id="${id}"` : "";
    return `<img src="${imageData.url}" alt="${altText}" class="${classes}"${idAttr}>`;
  };

  const handleImageGeneration = async () => {
    if (!aiSettings.websiteTopic) {
      alert("Please enter your website topic first");
      return;
    }

    setIsGenerating(true);

    try {
      let selectedSection = null;

      // Create mock prompt for testing
      let basePrompt = `Professional business image for ${aiSettings.websiteTopic}`;

      if (formData.mainContent) {
        selectedSection = extractRandomSectionFromContent(formData.mainContent);

        // 🆕 CHECK if all sections have images
        if (selectedSection && selectedSection.allHaveImages) {
          alert(
            "All sections already have an image under their heading. Remove an existing image first to add a new one."
          );
          setIsGenerating(false);
          return;
        }

        if (selectedSection) {
          basePrompt += `, related to: ${selectedSection.heading}. ${
            selectedSection.paragraphs[0] || ""
          }`;
          setSelectedTextInfo(selectedSection);
        }
      }

      const enhancedPrompt = `${basePrompt}`;

      // 🔥 ACTUAL API CALL TO YOUR VERCEL ENDPOINT
      const response = await fetch(
        "https://one-page-builder.vercel.app/api/images",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: enhancedPrompt,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to generate image");
      }

      const data = await response.json();

      // Handle the response from your Hugging Face API
      const imageB64 = data.data[0].b64_json;

      // Convert base64 to blob URL for preview
      const imageBlob = new Blob(
        [Uint8Array.from(atob(imageB64), (c) => c.charCodeAt(0))],
        { type: "image/png" }
      );
      const imageUrl = URL.createObjectURL(imageBlob);

      setGeneratedImage({
        url: imageUrl, // Blob URL for preview
        prompt: enhancedPrompt,
        b64_json: imageB64, // Base64 for download
        alt: "", // Default alt text
      });

      console.log("Image generated successfully");
    } catch (error) {
      console.error("Image generation error:", error);
      alert("Error generating image: " + error.message);
    }

    setIsGenerating(false);
  };

  const insertImageAtCursor = (imageData) => {
    const currentContent = formData.mainContent || "";
    const id = `aiimg-${Date.now()}`;

    const imageHTML = generateImageHTML(
      { url: imageData.url, alt: imageData.alt || "" },
      { id, floatValue: "none", altValue: imageData.alt || "" }
    );

    if (selectedTextInfo && selectedTextInfo.heading) {
      const headingText = selectedTextInfo.heading;
      const h2Pattern = new RegExp(
        `(<h2[^>]*>\\s*${headingText.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        )}\\s*</h2>)`,
        "i"
      );
      if (h2Pattern.test(currentContent)) {
        const newContent = currentContent.replace(
          h2Pattern,
          `$1\n${imageHTML}`
        );
        onImageInsert(newContent);
        setLastInsertedId(id);
        setEditorAlt(imageData.alt || "");
        setEditorFloat(imageFloat);
        setGeneratedImage(null);
        setSelectedTextInfo(null);
        return;
      }
    }
    // Fallback append
    const newContent = currentContent + "\n" + imageHTML;
    onImageInsert(newContent);
    setLastInsertedId(id);
    setEditorAlt(imageData.alt || "");
    setEditorFloat(imageFloat);
    setGeneratedImage(null);
    setSelectedTextInfo(null);
  };
  const updateInsertedImage = () => {
    if (!lastInsertedId) return;
    const currentContent = formData.mainContent || "";
    const imgRegex = new RegExp(
      `<img[^>]*data-ai-id=["']${lastInsertedId}["'][^>]*>`,
      "i"
    );
    const match = currentContent.match(imgRegex);
    if (!match) return;

    // Extract src
    const srcMatch = match[0].match(/src=["']([^"']+)["']/i);
    const src = srcMatch ? srcMatch[1] : "";
    const newHTML = generateImageHTML(
      { url: src, alt: editorAlt },
      { id: lastInsertedId, floatValue: editorFloat, altValue: editorAlt }
    );
    const updated = currentContent.replace(imgRegex, newHTML);
    onImageInsert(updated);
  };

  // NEW: remove inserted image
  const removeInsertedImage = () => {
    if (!lastInsertedId) return;
    const currentContent = formData.mainContent || "";
    const imgRegex = new RegExp(
      `<img[^>]*data-ai-id=["']${lastInsertedId}["'][^>]*>`,
      "i"
    );
    const updated = currentContent.replace(imgRegex, "");
    onImageInsert(updated);
    setLastInsertedId(null);
    setEditorAlt("");
    setEditorFloat("none");
  };
  return (
    <div className="ai-image-generator">
      <h3>AI Image Generator</h3>

      {/* Website Topic Input */}
      <div className="form-group">
        <label>Website Topic/Business Type</label>
        <input
          type="text"
          className="form-control"
          value={aiSettings.websiteTopic || ""}
          onChange={(e) =>
            setAiSettings((prev) => ({
              ...prev,
              websiteTopic: e.target.value,
            }))
          }
          placeholder="e.g., restaurant, law firm, web design agency, fitness gym, etc."
        />
      </div>

      {/* Generate Button */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleImageGeneration}
        disabled={!aiSettings.websiteTopic || isGenerating}
      >
        {isGenerating ? "Generating..." : "🎨 Generate Image (256x256)"}
      </button>

      {/* Generated Image Preview */}
      {generatedImage && (
        <div className="mt-4">
          <h4>Generated Image</h4>
          <div className="generated-image-preview">
            <img
              src={generatedImage.url}
              alt="Generated image"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
              className="img-fluid border rounded mb-3"
            />
            <div className="d-flex gap-2">
              <button
                className="btn btn-success"
                onClick={() => insertImageAtCursor(generatedImage)}
              >
                ✅ Insert Image
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setGeneratedImage(null)}
              >
                ❌ Discard
              </button>
            </div>
          </div>
        </div>
      )}
      {lastInsertedId && !generatedImage && (
        <div className="mt-4 border rounded p-3">
          <h5>Edit Inserted Image</h5>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Alt text</label>
              <input
                className="form-control"
                value={editorAlt}
                onChange={(e) => setEditorAlt(e.target.value)}
                placeholder="Accessible alt text"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Float</label>
              <select
                className="form-control"
                value={editorFloat}
                onChange={(e) => setEditorFloat(e.target.value)}
              >
                <option value="none">Default</option>
                <option value="start">Left</option>
                <option value="end">Right</option>
                <option value="center">Center</option>
              </select>
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <button
                className="btn btn-primary w-100"
                onClick={updateInsertedImage}
              >
                Apply
              </button>
            </div>
          </div>
          <div className="mt-3 d-flex gap-2">
            <button
              className="btn btn-outline-danger"
              onClick={removeInsertedImage}
            >
              Remove
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => setLastInsertedId(null)}
            >
              Save
            </button>
          </div>
          <small className="text-muted d-block mt-2">
            Editing image with id: {lastInsertedId}
          </small>
        </div>
      )}
    </div>
  );
}

export default AIImageGenerator;
