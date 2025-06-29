import "./Preview.css";
import {
  generateExportHtml,
  generateExportCss,
  generateFunctionsPhp,
  generateExportPhp,
} from "../../utils/exportSite";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const Preview = ({ formData }) => {
  async function handleDownloadZip(formData) {
    const zip = new JSZip();

    if (formData.exportFormat === "php") {
      zip.file("functions.php", generateFunctionsPhp(formData));
      zip.file("index.php", generateExportPhp(formData));
    } else {
      zip.file("index.html", generateExportHtml(formData));
    }
    // Add HTML and CSS
    zip.file("style.css", generateExportCss(formData));

    // Add .htaccess
    zip.file(
      ".htaccess",
      `RewriteEngine on
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

#the following two lines are non-www to www redirect
# RewriteCond %{HTTP_HOST} !^www\\. [NC]
# RewriteRule (.*) https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

#the following two lines are www to non-www redirect
RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]


RewriteRule ^index\\.php$ / [R=301,L]
RewriteRule ^(.*)/index\\.php$ /$1/ [R=301,L]

Options All -Indexes

ErrorDocument 404 /404.php

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]
#start remove .html + remove trailing slash
#replace .html with .php for php websites
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.php -f
RewriteRule ^(.+)$ $1.php [L,QSA]

#301 from example.com/page.html to example.com/page
RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\\ /.*\\.php\\ HTTP/
RewriteRule ^(.*)\\.php$ /$1 [R=301,L]

#removes multiple trailing slashes
<IfModule mod_rewrite.c>
RewriteBase /

# rule 1: remove multiple leading slashes (directly after the TLD)
RewriteCond %{THE_REQUEST} \\s/{2,}
RewriteRule (.*) $1 [R=301,L]

# rule 2: remove multiple slashes in the requested path
RewriteCond %{REQUEST_URI} ^(.*)/{2,}(.*)$
RewriteRule (.*) %1/%2 [R=301,L]
</IfModule>
`.trim(),
    );

    // Add images if needed
    // Example for logo (if it's a data URL)
    if (formData.logo && formData.logo.startsWith("data:")) {
      const res = await fetch(formData.logo);
      const blob = await res.blob();
      zip.file("logo.svg", blob);
    }
    if (formData.heroBg && formData.heroBg.startsWith("data:")) {
      const res = await fetch(formData.heroBg);
      const blob = await res.blob();
      zip.file("hero-bg.jpg", blob);
    }

    // Generate and trigger download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "website.zip");
    });
  }

  const heroClass = formData.heroBg
    ? "hero-section with-bg"
    : "hero-section gradient-bg";

  // Use CSS variables for preview
  return (
    <>
      <div
        className="website-preview"
        lang={formData.lang}
        style={{
          ...(formData.bodyBgColor
            ? { "--body-bg-color": formData.bodyBgColor }
            : {}),
          ...(formData.bodyTextColor
            ? { "--body-text-color": formData.bodyTextColor }
            : {}),
          ...(formData.headingColor
            ? { "--heading-color": formData.headingColor }
            : {}),
          ...(formData.fontFamily && formData.fontFamily !== "system"
            ? { "--font-family": formData.fontFamily }
            : {}),
          ...(formData.heroGradient1
            ? { "--hero-gradient1": formData.heroGradient1 }
            : {}),
          ...(formData.heroGradient2
            ? { "--hero-gradient2": formData.heroGradient2 }
            : {}),
          ...(formData.linkColor ? { "--link-color": formData.linkColor } : {}),
          ...(formData.headerBgColor
            ? { "--header-bg-color": formData.headerBgColor }
            : {}),
        }}
      >
        {/* Navigation */}
        <nav
          className={`navbar navbar-expand-lg navbar-light bg-light${formData.stickyNavbar ? " sticky-top" : ""}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src={formData.logo || "https://placehold.co/220x50"}
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
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#section1">
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
        <header
          className={heroClass}
          style={
            formData.heroBg
              ? { backgroundImage: `url(${formData.heroBg})` }
              : {
                  background: `linear-gradient(135deg, ${formData.heroGradient1 || "#667eea"} 0%, ${formData.heroGradient2 || "#764ba2"} 100%)`,
                }
          }
        >
          <div className="hero-content">
            <h1 className="hero-title">{formData.h1 || "Main Heading"}</h1>
            {formData.afterH1 && (
              <div className="hero-afterh1">
                {formData.afterH1.split("\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>
        </header>
        <main className="main-content container py-5">
          {formData.mainContent ? (
            <div dangerouslySetInnerHTML={{ __html: formData.mainContent }} />
          ) : (
            <div className="no-content">No main content yet.</div>
          )}
        </main>
        <footer
          className="accent-background footer"
          id="footer"
          style={
            formData.footerBgColor
              ? { background: formData.footerBgColor }
              : undefined
          }
        >
          <div className="container-fluid mt-4 pb-3">
            <div className="d-flex justify-content-center flex-column flex-md-row justify-content-md-between align-items-center">
              <p className="text-center mb-2 mb-md-0">
                © <span>Copyright</span> {new Date().getFullYear()}
                <a href="/" className="px-1 sitename">
                  {formData.domain || "domain.com"}
                </a>
                <span>All Rights reserved</span>
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center  align-items-center gap-3">
                <p className="mb-0">
                  Email: info[@]{formData.domain || "domain.com"}
                </p>
                <a href="/privacy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <button
        className="cool-ai-btn"
        onClick={() => handleDownloadZip(formData)}
      >
        Download Files
      </button>
    </>
  );
};

export default Preview;
