import "./BuilderForm.css"

const BuilderForm = ({ formData, setFormData }) => {
  console.log("BuilderForm rendered!", formData);
  const handleLogoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, logo: reader.result }))
      }
      reader.readAsDataURL(file)
    } else {
      setFormData(prev => ({ ...prev, logo: "" }))
    }
  }



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
              onChange={e =>
                setFormData(prev => ({ ...prev, lang: e.target.value }))
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
              onChange={e =>
                setFormData(prev => ({ ...prev, domain: e.target.value }))
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
            onChange={e =>
              setFormData(prev => ({ ...prev, title: e.target.value }))
            }
            placeholder="Enter website title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Website Description</label>
          <textarea
            className="form-control"
            value={formData.desc}
            onChange={e =>
              setFormData(prev => ({ ...prev, desc: e.target.value }))
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
                onClick={() => setFormData(prev => ({ ...prev, logo: "" }))}
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
            onChange={e =>
              setFormData(prev => ({ ...prev, h1: e.target.value }))
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
            onChange={e => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFormData(prev => ({ ...prev, heroBg: reader.result }));
                };
                reader.readAsDataURL(file);
              } else {
                setFormData(prev => ({ ...prev, heroBg: "" }));
              }
            }}
          />
          {formData.heroBg && (
            <div className="mt-2">
              <img
                src={formData.heroBg}
                alt="Hero Background Preview"
                style={{ maxWidth: "100%", maxHeight: "120px", objectFit: "cover" }}
              />
              <button
                type="button"
                className="btn btn-sm btn-danger mt-2 ms-3"
                onClick={() => setFormData(prev => ({ ...prev, heroBg: "" }))}
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
            onChange={e =>
              setFormData(prev => ({ ...prev, afterH1: e.target.value }))
            }
            placeholder="Enter text after heading"
          />
        </div>        <div className="mb-3">
        <label className="form-label">
  Main Content (HTML only, e.g. &lt;h2&gt;...&lt;/h2&gt;, &lt;p&gt;...&lt;/p&gt;)
</label>          <textarea
            className="form-control"
            rows={10}
            value={formData.mainContent || ""}
            onChange={e =>
              setFormData(prev => ({ ...prev, mainContent: e.target.value }))
            }
            placeholder="Enter main content"
          />
        </div>
      </div>
    </div>
  )
}

export default BuilderForm