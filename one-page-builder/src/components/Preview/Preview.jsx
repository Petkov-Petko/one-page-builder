import "./Preview.css"

const Preview = ({ formData }) => {
  const heroClass = formData.heroBg ? "hero-section with-bg" : "hero-section gradient-bg";

  // Prepare hero background style
  const heroStyle = formData.heroBg
    ? {
        backgroundImage: `url(${formData.heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "320px",
        color: "#fff",
        position: "relative",
      }
    : {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "320px",
        color: "#fff",
        position: "relative",
      };

  // Split main content into sections by <h2>
  const mainSections = [];
  if (formData.mainContent) {
    const parts = formData.mainContent.split(/(\n*^## .*$\n*)/m); // Split by lines starting with ## (as h2)
    let section = [];
    parts.forEach((part) => {
      if (part.trim().startsWith("## ")) {
        if (section.length) mainSections.push(section);
        section = [part];
      } else {
        section.push(part);
      }
    });
    if (section.length) mainSections.push(section);
  }

  return (
    <div className="website-preview" lang={formData.lang}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={formData.logo || "https://placehold.co/230x50"}
              alt="Logo"
              width="230"
              height="50"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#section1">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section2">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section3">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className={heroClass}
        style={formData.heroBg ? { backgroundImage: `url(${formData.heroBg})` } : {}}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            {formData.h1 || "Main Heading"}
          </h1>
          {formData.afterH1 && (
            <div className="hero-afterh1">
              {formData.afterH1.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="main-content container py-5">
      {formData.mainContent ? (
    <div dangerouslySetInnerHTML={{ __html: formData.mainContent }} />
  ) : (
    <div className="no-content">No main content yet.</div>
  )}
      </main>
      <footer className="accent-background footer" id="footer">
        <div className="container mt-4 pb-3">
          <div className="d-flex justify-content-center flex-column flex-md-row justify-content-md-between align-items-center">
            <p className="text-center mb-2 mb-md-0">
              © <span>Copyright</span> {new Date().getFullYear()}
              <a href="/" className="px-1 sitename">
                {formData.domain || "domain.com"}
              </a>
              <span>All Rights reserved</span>
            </p>
            <div className="d-flex justify-content-center gap-3">
              <p>Email: info[@]{formData.domain || "domain.com"}</p>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Preview