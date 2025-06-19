import "./BuilderForm.css";

const BuilderForm = ({ formData, setFormData }) => {
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, logo: "" }));
    }
  };

  return (
    <div className="form-container">
      <h1>One Page Builder</h1>
      <div className="header-editor">
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <label className="form-label">Website Language</label>
            <input
              type="text"
              className="form-control"
              value={formData.lang}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, lang: e.target.value }))
              }
              placeholder="e.g. en, fr, es"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Website Domain</label>
            <input
              type="text"
              className="form-control"
              value={formData.domain || ""}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, domain: e.target.value }))
              }
              placeholder="e.g. example.com"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Website Title</label>
          <input
            type="text"
            className="form-control"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Enter website title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Website Description</label>
          <textarea
            className="form-control"
            value={formData.desc}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, desc: e.target.value }))
            }
            placeholder="Enter website description"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Website Logo</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleLogoChange}
          />
          {formData.logo && (
            <div className="mt-2">
              <img
                src={formData.logo}
                alt="Logo Preview"
                style={{ maxWidth: "120px", maxHeight: "120px" }}
              />
              <button
                type="button"
                className="btn btn-sm btn-danger mt-2 ms-4"
                onClick={() => setFormData((prev) => ({ ...prev, logo: "" }))}
              >
                X
              </button>
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Main Heading (h1)</label>
          <input
            type="text"
            className="form-control"
            value={formData.h1 || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, h1: e.target.value }))
            }
            placeholder="Enter main heading"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hero Background Image (optional)</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormData((prev) => ({ ...prev, heroBg: reader.result }));
                };
                reader.readAsDataURL(file);
              } else {
                setFormData((prev) => ({ ...prev, heroBg: "" }));
              }
            }}
          />
          {formData.heroBg && (
            <div className="mt-2">
              <img
                src={formData.heroBg}
                alt="Hero Background Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "120px",
                  objectFit: "cover",
                }}
              />
              <button
                type="button"
                className="btn btn-sm btn-danger mt-2 ms-3"
                onClick={() => setFormData((prev) => ({ ...prev, heroBg: "" }))}
              >
                Remove Image
              </button>
            </div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Text after Heading</label>
          <textarea
            className="form-control"
            rows={4}
            value={formData.afterH1 || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, afterH1: e.target.value }))
            }
            placeholder="Enter text after heading"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Main Content (HTML only, e.g. &lt;h2&gt;...&lt;/h2&gt;,
            &lt;p&gt;...&lt;/p&gt;)
          </label>
          <textarea
            className="form-control"
            rows={10}
            value={formData.mainContent || ""}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, mainContent: e.target.value }))
            }
            placeholder="Enter main content"
          />
        </div>
        <div className="mb-3">
<label className="form-label">
  Export Format:
</label>
<div>
  <label style={{ marginRight: 16 }}>
    <input
      type="radio"
      name="exportFormat"
      value="html"
      checked={formData.exportFormat !== "php"}
      onChange={() => setFormData(prev => ({ ...prev, exportFormat: "html" }))}
    />
    HTML
  </label>
  <label>
    <input
      type="radio"
      name="exportFormat"
      value="php"
      checked={formData.exportFormat === "php"}
      onChange={() => setFormData(prev => ({ ...prev, exportFormat: "php" }))}
    />
    PHP <span style={{ color: "#f59e42", fontSize: 13, marginLeft: 4 }}>(still in development)</span>
  </label>
</div>
</div>
        <div className="form-style-section">
          <h5
            className="mb-4"
            style={{ letterSpacing: "1px", color: "#4f46e5" }}
          >
            Style Options
          </h5>
          <div className="mb-3 d-flex align-items-center gap-4 flex-wrap">
            <div className="color-input-group">
              <label
                className="form-label"
                style={{ fontWeight: 600, color: "#6366f1" }}
              >
                <span style={{ marginRight: 8, fontSize: 18 }}>🎨</span>Body
                Background Color
              </label>
              <input
                type="color"
                className="form-control form-control-color shadow"
                value={formData.bodyBgColor || "#f8fafc"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    bodyBgColor: e.target.value,
                  }))
                }
                title="Choose body background color"
                style={{
                  width: 48,
                  height: 48,
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                }}
              />
            </div>
            <div className="color-input-group">
              <label
                className="form-label"
                style={{ fontWeight: 600, color: "#6366f1" }}
              >
                <span style={{ marginRight: 8, fontSize: 18 }}>🖍️</span>Text
                Color
              </label>
              <input
                type="color"
                className="form-control form-control-color shadow"
                value={formData.bodyTextColor || "#222222"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    bodyTextColor: e.target.value,
                  }))
                }
                title="Choose body text color"
                style={{
                  width: 48,
                  height: 48,
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                }}
              />
            </div>
            <div className="color-input-group">
              <label
                className="form-label"
                style={{ fontWeight: 600, color: "#6366f1" }}
              >
                <span style={{ marginRight: 8, fontSize: 18 }}>🔠</span>Headings
                Color (h2)
              </label>
              <input
                type="color"
                className="form-control form-control-color shadow"
                value={formData.headingColor || "#222222"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    headingColor: e.target.value,
                  }))
                }
                title="Choose headings color"
                style={{
                  width: 48,
                  height: 48,
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                }}
              />
            </div>
            <div className="color-input-group">
              <label
                className="form-label"
                style={{ fontWeight: 600, color: "#6366f1" }}
              >
                <span style={{ marginRight: 8, fontSize: 18 }}>🌈</span>Hero
                Gradient Colors
              </label>
              <div className="d-flex align-items-center gap-2">
                <input
                  type="color"
                  className="form-control form-control-color shadow"
                  value={formData.heroGradient1 || "#667eea"}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      heroGradient1: e.target.value,
                    }))
                  }
                  title="Choose first gradient color"
                  style={{
                    width: 48,
                    height: 48,
                    border: "none",
                    cursor: "pointer",
                    background: "none",
                  }}
                />
                <span style={{ fontSize: 24, color: "#6366f1" }}>→</span>
                <input
                  type="color"
                  className="form-control form-control-color shadow"
                  value={formData.heroGradient2 || "#764ba2"}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      heroGradient2: e.target.value,
                    }))
                  }
                  title="Choose second gradient color"
                  style={{
                    width: 48,
                    height: 48,
                    border: "none",
                    cursor: "pointer",
                    background: "none",
                  }}
                />
              </div>
              <div style={{ marginTop: 8, fontSize: 13, color: "#6366f1" }}>
                Pick two colors for the hero section gradient background
              </div>
            </div>
            <div className="color-input-group">
              <label
                className="form-label"
                style={{ fontWeight: 600, color: "#6366f1" }}
              >
                <span style={{ marginRight: 8, fontSize: 18 }}>🦶</span>Footer
                Background Color
              </label>
              <input
                type="color"
                className="form-control form-control-color shadow"
                value={formData.footerBgColor || "##0d0d0d"}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    footerBgColor: e.target.value,
                  }))
                }
                title="Choose footer background color"
                style={{
                  width: 48,
                  height: 48,
                  border: "none",
                  cursor: "pointer",
                  background: "none",
                }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <div className="color-input-group">
                <label
                  className="form-label"
                  style={{ fontWeight: 600, color: "#6366f1" }}
                >
                  <span style={{ marginRight: 8, fontSize: 18 }}>📌</span>Sticky
                  Navbar
                </label>
                <div className="form-check form-switch mt-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="stickyNavbar"
                    checked={!!formData.stickyNavbar}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        stickyNavbar: e.target.checked,
                      }))
                    }
                  />
                  <label className="form-check-label" htmlFor="stickyNavbar">
                    Enable sticky navigation bar
                  </label>
                </div>
              </div>
              <div className="color-input-group">
                <label
                  className="form-label"
                  style={{ fontWeight: 600, color: "#6366f1" }}
                >
                  <span style={{ marginRight: 8, fontSize: 18 }}>🔗</span>Link
                  Color (a)
                </label>
                <input
                  type="color"
                  className="form-control form-control-color shadow"
                  value={formData.linkColor || "#2563eb"}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      linkColor: e.target.value,
                    }))
                  }
                  title="Choose link color"
                  style={{
                    width: 48,
                    height: 48,
                    border: "none",
                    cursor: "pointer",
                    background: "none",
                  }}
                />
              </div>
              <div className="color-input-group">
                <label
                  className="form-label"
                  style={{ fontWeight: 600, color: "#6366f1" }}
                >
                  <span style={{ marginRight: 8, fontSize: 18 }}>🟦</span>Header
                  Background Color
                </label>
                <input
                  type="color"
                  className="form-control form-control-color shadow"
                  value={formData.headerBgColor || "#ffffff"}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      headerBgColor: e.target.value,
                    }))
                  }
                  title="Choose header background color"
                  style={{
                    width: 48,
                    height: 48,
                    border: "none",
                    cursor: "pointer",
                    background: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderForm;
