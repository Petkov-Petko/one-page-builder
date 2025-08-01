import { useState } from "react";
import "./BuilderForm.css";

function BuilderForm({
  formData,
  setFormData,
  globalSettings,
  setGlobalSettings,
  currentPage,
}) {
  const [activeTab, setActiveTab] = useState("page");

  const handleGlobalChange = (field, value) => {
    setGlobalSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePageChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (field, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (field === "logo") {
          handleGlobalChange("logo", e.target.result);
        } else if (field === "favicon") {
          handleGlobalChange("favicon", e.target.result);
          handleGlobalChange("faviconName", file.name);
        } else if (field === "heroBg") {
          handleGlobalChange("heroBg", e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
const handleApplyBoldWords = () => {
  if (!formData.mainContent || !formData.boldWords) return;

  let updatedContent = formData.mainContent;
  const wordsToBold = formData.boldWords
    .split(",")
    .map((word) => word.trim())
    .filter((word) => word.length > 0);

  wordsToBold.forEach((word) => {
    // Escape special regex characters
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Create regex to find the word (case-insensitive, whole word, not already in tags, not in headings)
    const regex = new RegExp(
      `(?<!<[^>]*>)(?<!<h[1-6][^>]*>)(?<!<h[1-6][^>]*>[^<]*)\\b(${escapedWord})\\b(?![^<]*<\/h[1-6]>)(?![^<]*>)(?!<\/strong>)`,
      "i",
    );

    // Replace only the first occurrence that's not already in a strong tag or heading
    const match = updatedContent.match(regex);
    if (match) {
      updatedContent = updatedContent.replace(regex, `<strong>$1</strong>`);
    }
  });

  // Update the content
  handlePageChange("mainContent", updatedContent);

  // Optional: Clear the bold words input after applying
  handlePageChange("boldWords", "");
};

  return (
    <div className="builder-form">
      <div className="form-tabs">
        <button
          className={`tab-btn ${activeTab === "page" ? "active" : ""}`}
          onClick={() => setActiveTab("page")}
        >
          Page Content
        </button>
        <button
          className={`tab-btn ${activeTab === "global" ? "active" : ""}`}
          onClick={() => setActiveTab("global")}
        >
          Global Settings
        </button>
        <button
          className={`tab-btn ${activeTab === "style" ? "active" : ""}`}
          onClick={() => setActiveTab("style")}
        >
          Styling
        </button>
        <button
          className={`tab-btn ${activeTab === "privacy" ? "active" : ""}`}
          onClick={() => setActiveTab("privacy")}
        >
          Privacy or Terms
        </button>
      </div>

      {activeTab === "page" && (
        <div className="tab-content">
          <h3>{currentPage?.title || "Page"} Content</h3>

          <div className="form-group">
            <label>Page Title (SEO)</label>
            <input
              type="text"
              className="form-control"
              value={formData.title || ""}
              onChange={(e) => handlePageChange("title", e.target.value)}
              placeholder="Page title for browser tab and SEO"
            />
          </div>

          <div className="form-group">
            <label>Meta Description</label>
            <textarea
              className="form-control"
              rows="2"
              value={formData.desc || ""}
              onChange={(e) => handlePageChange("desc", e.target.value)}
              placeholder="Brief description for search engines"
            />
          </div>

          <div className="form-group">
            <label>Hero Heading (H1)</label>
            <input
              type="text"
              className="form-control"
              value={formData.h1 || ""}
              onChange={(e) => handlePageChange("h1", e.target.value)}
              placeholder="Main heading that visitors see first"
            />
          </div>

          <div className="form-group">
            <label>
              Hero Subtext(The subtext must be valid HTML. For example:{" "}
              <code>&lt;p&gt;Text&lt;/p&gt;</code>)
            </label>
            <textarea
              className="form-control"
              rows="3"
              value={formData.afterH1 || ""}
              onChange={(e) => handlePageChange("afterH1", e.target.value)}
              placeholder="Text that appears below the main heading"
            />
          </div>

          <div className="form-group">
            <label>
              Main Content(The content must be valid HTML. For example:{" "}
              <code>&lt;h2&gt;Heading&lt;/h2&gt;</code>)
            </label>
            <textarea
              className="form-control"
              rows="12"
              value={formData.mainContent || ""}
              onChange={(e) => handlePageChange("mainContent", e.target.value)}
              placeholder="HTML content for this page (use <h2> for sections, <p> for paragraphs)"
            />
            <small className="form-text text-muted">
              Use HTML tags like &lt;h2&gt;Section Title&lt;/h2&gt; and
              &lt;p&gt;Paragraph text&lt;/p&gt;
            </small>
          </div>
          <div className="form-group">
            <label>Bold Words (Optional)</label>
            <input
              type="text"
              className="form-control"
              value={formData.boldWords || ""}
              onChange={(e) => handlePageChange("boldWords", e.target.value)}
              placeholder="Enter words to make bold, one by one or separated by commas (e.g., important, featured, special)"
            />
            <small className="form-text text-muted">
              Type words one by one or all separated by commas. Only the first
              occurrence of each word will be bolded.
            </small>
            <button
              type="button"
              className="btn btn-sm btn-secondary mt-2 ms-2"
              onClick={handleApplyBoldWords}
              disabled={!formData.mainContent || !formData.boldWords}
            >
              Apply Bold Words
            </button>
          </div>
        </div>
      )}

      {activeTab === "global" && (
        <div className="tab-content">
          <h3>Global Settings</h3>

          <div className="form-group">
            <label>Website Domain</label>
            <input
              type="text"
              className="form-control"
              value={globalSettings.domain || ""}
              onChange={(e) => handleGlobalChange("domain", e.target.value)}
              placeholder="yourdomain.com"
            />
          </div>
          <div className="form-group">
            <label>Website Name</label>
            <input
              type="text"
              className="form-control"
              value={globalSettings.name || ""}
              onChange={(e) => handleGlobalChange("name", e.target.value)}
              placeholder="Your Website Name"
            />
          </div>

          <div className="form-group">
            <label>Website Language</label>
            <input
              type="text"
              className="form-control"
              value={globalSettings.lang || "en"}
              onChange={(e) => handleGlobalChange("lang", e.target.value)}
              placeholder="Language code (e.g., en, es, fr, de, etc.)"
            />
            <small className="form-text text-muted">
              Enter the language code for your website (e.g., en for English, es
              for Spanish, fr for French)
            </small>
          </div>
          <div className="form-group">
            <label>Website Email</label>
            <input
              type="email"
              className="form-control"
              value={globalSettings.email || ""}
              onChange={(e) => handleGlobalChange("email", e.target.value)}
              placeholder="Website contact email"
            />
            <small className="form-text text-muted">
              This email will be used in footer and Terms or Privacy pages.
            </small>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={globalSettings.sidebar || false}
                onChange={(e) =>
                  handleGlobalChange("sidebar", e.target.checked)
                }
                id="sidebarCheckbox"
              />
              <label className="form-check-label " htmlFor="sidebarCheckbox">
                Enable Sidebar
              </label>
            </div>
            <small className="form-text text-muted">
              Check to display a sidebar on all pages. Default is off.
            </small>
          </div>

          <div className="form-group">
            <label>Logo</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFileUpload("logo", e.target.files[0])}
            />
            {globalSettings.logo && (
              <div className="file-preview">
                <img
                  src={globalSettings.logo}
                  alt="Logo"
                  style={{ maxWidth: "180px", maxHeight: "90px" }}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => handleGlobalChange("logo", "")}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Favicon</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFileUpload("favicon", e.target.files[0])}
            />
            {globalSettings.favicon && (
              <div className="file-preview">
                <img
                  src={globalSettings.favicon}
                  alt="Favicon"
                  style={{ maxWidth: "48px", maxHeight: "48px" }}
                />
                <span className="ms-2">{globalSettings.faviconName}</span>
                <button
                  type="button"
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => {
                    handleGlobalChange("favicon", "");
                    handleGlobalChange("faviconName", "");
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={globalSettings.stickyNavbar || false}
                onChange={(e) =>
                  handleGlobalChange("stickyNavbar", e.target.checked)
                }
              />
              <label className="form-check-label">Sticky Navigation Bar</label>
            </div>
          </div>

          <div className="form-group">
            <label>Hero Background Image (All Pages)</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFileUpload("heroBg", e.target.files[0])}
            />
            {globalSettings.heroBg && (
              <div className="file-preview">
                <img
                  src={globalSettings.heroBg}
                  alt="Hero background"
                  style={{ maxWidth: "180px", maxHeight: "110px" }}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => handleGlobalChange("heroBg", "")}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "style" && (
        <div className="tab-content">
          <h3>Global Styling</h3>
          <p className="text-muted">These styles apply to all pages</p>

          <div className="form-group">
            <label>Font Family</label>
            <select
              className="form-control"
              value={globalSettings.fontFamily || "system"}
              onChange={(e) => handleGlobalChange("fontFamily", e.target.value)}
            >
              <option value="system">System Default</option>
              <option value="Arial">Arial</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>

          {/* Header Section */}
          <div className="style-section">
            <h4 className="section-title">Header</h4>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Navigation style:</label>
                  <select
                    className="form-control"
                    value={globalSettings.navStyle || "1"}
                    onChange={(e) =>
                      handleGlobalChange("navStyle", e.target.value)
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3">
                <div className="form-group">
                  <label>Header Background Color</label>
                  <input
                    type="color"
                    className="form-control"
                    value={globalSettings.headerBgColor || "#ffffff"}
                    onChange={(e) =>
                      handleGlobalChange("headerBgColor", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-3">
                <div className="form-group">
                  <label>Hero Gradient Color 1</label>
                  <input
                    type="color"
                    className="form-control"
                    value={globalSettings.heroGradient1 || "#667eea"}
                    onChange={(e) =>
                      handleGlobalChange("heroGradient1", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-3">
                <div className="form-group">
                  <label>Hero Gradient Color 2</label>
                  <input
                    type="color"
                    className="form-control"
                    value={globalSettings.heroGradient2 || "#764ba2"}
                    onChange={(e) =>
                      handleGlobalChange("heroGradient2", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4 col-xl-3">
                <div className="form-group">
                  <label>Nav links color</label>
                  <input
                    type="color"
                    className="form-control"
                    value={globalSettings.navLinkColor || "#222222"}
                    onChange={(e) =>
                      handleGlobalChange("navLinkColor", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Section */}
          <div className="style-section">
            <h4 className="section-title">Main Content</h4>
            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <div className="form-group">
                  <label>Body Background Color</label>
                  <input
                    type="color"
                    className="form-control"
                    value={globalSettings.bodyBgColor || "#f8fafc"}
                    onChange={(e) =>
                      handleGlobalChange("bodyBgColor", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="form-group">
                  <label>Body Text Color</label>
                  <input
                    type="color"
                    className="form-control"
                    value={globalSettings.bodyTextColor || "#222222"}
                    onChange={(e) =>
                      handleGlobalChange("bodyTextColor", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="form-group">
                  <label>Headings Color</label>
                  <input
                    type="color"
                    className="form-control"
                    value={globalSettings.headingColor || "#222222"}
                    onChange={(e) =>
                      handleGlobalChange("headingColor", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="form-group">
                  <label>Link Color</label>
                  <input
                    type="color"
                    className="form-control"
                    value={globalSettings.linkColor || "#2563eb"}
                    onChange={(e) =>
                      handleGlobalChange("linkColor", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="style-section">
            <h4 className="section-title">Footer</h4>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Footer Background Color</label>
                  <input
                    type="color"
                    className="form-control"
                    value={globalSettings.footerBgColor || "#0d0d0d"}
                    onChange={(e) =>
                      handleGlobalChange("footerBgColor", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "privacy" && (
        <div className="tab-content">
          <div className="form-group">
            <label>Select Page Type</label>
            <select
              className="form-control"
              value={globalSettings.privacyOrTerms || "privacy"}
              onChange={(e) =>
                handleGlobalChange("privacyOrTerms", e.target.value)
              }
            >
              <option value="privacy">Privacy Policy</option>
              <option value="terms">Terms &amp; Conditions</option>
            </select>
          </div>
          <div className="form-group">
            <label>Website full URL</label>
            <input
              type="text"
              className="form-control"
              value={globalSettings.url || ""}
              onChange={(e) => handleGlobalChange("url", e.target.value)}
              placeholder="Enter your website URL (e.g., https://yourdomain.com)"
            />
            <small className="form-text text-muted">
              The url will be used in the robots.txt and htaccess files also.
            </small>
          </div>
          <div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                value={globalSettings.country || ""}
                onChange={(e) => handleGlobalChange("country", e.target.value)}
                placeholder="Enter country (e.g., United States)"
              />
            </div>
          </div>
          <div>
            {globalSettings.privacyOrTerms === "privacy" ? (
              <div className="form-group">
                <label>Choose privacy style type</label>
                <select
                  className="form-control"
                  value={globalSettings.privacyOption || "1"}
                  onChange={(e) =>
                    handleGlobalChange("privacyOption", e.target.value)
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            ) : (
              <div className="form-group">
                <label>Choose terms style type</label>
                <select
                  className="form-control"
                  value={globalSettings.termsOption || "1"}
                  onChange={(e) =>
                    handleGlobalChange("termsOption", e.target.value)
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default BuilderForm;
