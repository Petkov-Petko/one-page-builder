import "./Preview.css";
import { generateMultiPageExport } from "../../utils/exportSite";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { export404 } from "../../utils/export404";
import { exportHtaccess } from "../../utils/exportHtaccess";
import { exportPrivacy1, exportPrivacy2 } from "../../utils/exportPrivacy";
import { exportTerms1, exportTerms2 } from "../../utils/exportTerms";
import { exportRobots } from "../../utils/exportRobots";

const Preview = ({ formData, globalSettings, pages, currentPage }) => {
  async function handleDownloadZip() {
    console.log(globalSettings);
    
    const zip = new JSZip();

    // Generate multi-page website files
    const multiPageExport = generateMultiPageExport(pages, globalSettings);

    // Add all PHP files
    Object.entries(multiPageExport.pages).forEach(([filename, content]) => {
      zip.file(filename, content);
    });

    // Add functions.php and style.css
    zip.file("functions.php", multiPageExport.functions);
    zip.file("style.css", multiPageExport.styles);

// Add Bootstrap files
try {
  // Add Bootstrap CSS
  const bootstrapCssResponse = await fetch('/one-page-builder/bootstrap/css/bootstrap.min.css');
  const bootstrapCssBlob = await bootstrapCssResponse.blob();
  zip.file("assets/bootstrap/css/bootstrap.min.css", bootstrapCssBlob);

  // Add Bootstrap JS
  const bootstrapJsResponse = await fetch('/one-page-builder/bootstrap/js/bootstrap.min.js');
  const bootstrapJsBlob = await bootstrapJsResponse.blob();
  zip.file("assets/bootstrap/js/bootstrap.min.js", bootstrapJsBlob);
} catch (error) {
  console.warn('Could not add Bootstrap files to download:', error);
}

    // Add 404.php
    zip.file("404.php", export404());
    // Add robots.txt
      zip.file("robots.txt", exportRobots(globalSettings.url, pages));
    // Add privacy or terms
    if (globalSettings.privacyOrTerms === "privacy") {
      switch (globalSettings.privacyOption) {
        case "1":
          zip.file(
            "privacy.php",
            exportPrivacy1(
              globalSettings.email,
              globalSettings.url,
              globalSettings.country,
              globalSettings.name,
            ),
          );
          break;
        case "2":
          zip.file(
            "privacy.php",
            exportPrivacy2(
              globalSettings.email,
              globalSettings.url,
              globalSettings.country,
              globalSettings.name,
            ),
          );
          break;
      }
    } else if (globalSettings.privacyOrTerms === "terms") {
      switch (globalSettings.termsOption) {
        case "1":
          zip.file(
            "terms.php",
            exportTerms1(
              globalSettings.email,
              globalSettings.url,
              globalSettings.country,
              globalSettings.name,
            ),
          );
          break;
        case "2":
          zip.file(
            "terms.php",
            exportTerms2(
              globalSettings.email,
              globalSettings.url,
              globalSettings.country,
              globalSettings.name,
            ),
          );
          break;
      }
    }
    // Add .htaccess
    zip.file(".htaccess", exportHtaccess(globalSettings.url));

    // Add images if they exist
    if (globalSettings.logo && globalSettings.logo.startsWith("data:")) {
      const res = await fetch(globalSettings.logo);
      const blob = await res.blob();
      zip.file("images/logo.svg", blob);
    }

    if (globalSettings.favicon && globalSettings.favicon.startsWith("data:")) {
      const res = await fetch(globalSettings.favicon);
      const blob = await res.blob();
      zip.file("images/favicon.png", blob);
    }

    // Add hero background if it exists
    if (globalSettings.heroBg && globalSettings.heroBg.startsWith("data:")) {
      const res = await fetch(globalSettings.heroBg);
      const blob = await res.blob();
      zip.file("images/hero-bg.jpg", blob);
    }

    // Generate and trigger download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${globalSettings.domain || "multi-page-website"}.zip`);
    });
  }

  const heroClass = globalSettings.heroBg
    ? "hero-section with-bg"
    : "hero-section gradient-bg";

  // Generate navigation items
  const visiblePages = pages.filter(
    (page) => !globalSettings.hiddenFromNav?.includes(page.id),
  );
  const customNavItems = globalSettings.customNavItems || [];

  // Group pages by parent for dropdown functionality
  const topLevelPages = visiblePages.filter((page) => !page.parentId);
  const childPages = visiblePages.filter((page) => page.parentId);

  const currentYear = new Date().getFullYear();

  return (
    <div
      className="preview-container"
      style={{
        "--body-bg-color": globalSettings.bodyBgColor || "#f8fafc",
        "--body-text-color": globalSettings.bodyTextColor || "#222222",
        "--heading-color": globalSettings.headingColor || "#222222",
        "--hero-gradient-1": globalSettings.heroGradient1 || "#667eea",
        "--hero-gradient-2": globalSettings.heroGradient2 || "#764ba2",
        "--footer-bg-color": globalSettings.footerBgColor || "#0d0d0d",
        "--link-color": globalSettings.linkColor || "#2563eb",
        "--header-bg-color": globalSettings.headerBgColor || "#ffffff",
        "--font-family":
          globalSettings.fontFamily && globalSettings.fontFamily !== "system"
            ? globalSettings.fontFamily
            : "system-ui",
        "--nav-link-color": globalSettings.navLinkColor || "#141414",
      }}
    >
      <div className="preview-header d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
        <div>
          <h5 className="mb-0">
            Preview: {currentPage?.title || "Untitled Page"}
          </h5>
          <small className="text-muted">
            {pages.length} page{pages.length !== 1 ? "s" : ""} total
          </small>
        </div>
        <button className="btn btn-success" onClick={handleDownloadZip}>
          <i className="bi bi-download"></i> Download Multi-Page Site
        </button>
      </div>

      <div className="website-preview" lang={globalSettings.lang || "en"}>
        {/* Navigation */}
        <nav
          className={`navbar navbar-expand-lg navbar-light${globalSettings.stickyNavbar ? " sticky-top" : ""} ${globalSettings.navStyle === "1" ? "" : "floating-rounded-navbar container"}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src={globalSettings.logo || "https://placehold.co/220x50"}
                alt="Logo"
                width="220"
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
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                {topLevelPages.map((page) => {
                  if (page.isDropdownParent) {
                    // Render as dropdown
                    const children = childPages.filter(
                      (child) => child.parentId === page.id,
                    );
                    return (
                      <li key={page.id} className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {page.navLabel || page.title}
                        </a>
                        <ul className="custom-dropdown dropdown-menu">
                          {children.map((child) => (
                            <li key={child.id}>
                              <a
                                className={`dropdown-item ${child.id === currentPage?.id ? "active" : ""}`}
                                href={`#${child.slug}`}
                              >
                                {child.navLabel || child.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  } else {
                    // Render as regular nav item
                    return (
                      <li key={page.id} className="nav-item">
                        <a
                          className={`nav-link ${page.id === currentPage?.id ? "active" : ""}`}
                          href={page.isHome ? "#" : `#${page.slug}`}
                        >
                          {page.navLabel || page.title}
                        </a>
                      </li>
                    );
                  }
                })}
                {customNavItems.map((item) => (
                  <li key={item.id} className="nav-item">
                    <a
                      className="nav-link"
                      href={item.url}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          className={`${heroClass} ${globalSettings.navStyle === "2" && "second-style"}`}
          style={
            globalSettings.heroBg
              ? {
                  backgroundImage: `url(${globalSettings.heroBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }
              : {}
          }
        >
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="row justify-content-center text-center">
              <div className="col-lg-11">
                <h1 className="display-4 fw-bold text-white mb-4">
                  {formData.h1 || "Welcome to Your Website"}
                </h1>
                {formData.afterH1 && (
                  <div
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: formData.afterH1 }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container my-5">
          <div className="row">
            <div className="col-lg-12">
              {formData.mainContent ? (
                <div
                  className="content-area"
                  dangerouslySetInnerHTML={{ __html: formData.mainContent }}
                />
              ) : (
                <div className="text-center text-muted py-5">
                  <h3>No content added yet</h3>
                  <p>Add some content to see it here</p>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer mt-auto py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="mb-0">
                  © {currentYear} {globalSettings.domain || "Your Website"}.
                  All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <span className="me-3">
                  Email:{" "}
                  {globalSettings.email ||
                    `info[@]${globalSettings.domain || "domain.com"}`}
                </span>
                <a href="#">
                  {globalSettings.privacyOrTerms === "privacy"
                    ? "Privacy Policy"
                    : "Terms & Conditions"}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Preview;
