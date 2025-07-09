import "./Preview.css";
import {
  generateMultiPageExport,
} from "../../utils/exportSite";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { export404 } from "../../utils/export404";
import { exportPrivacy1, exportPrivacy2 } from "../../utils/exportPrivacy";
import { exportTerms1, exportTerms2 } from "../../utils/exportTerms";
import { exportRobots } from "../../utils/exportRobots";

const Preview = ({ formData, globalSettings, pages, currentPage }) => {
  async function handleDownloadZip() {    
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
    // Add 404.php
    zip.file("404.php", export404());
    // Add robots.txt
    if(pages.length > 1) {
      zip.file("robots.txt", exportRobots(globalSettings.url));
    }
    // Add privacy or terms
    if(globalSettings.privacyOrTerms === 'privacy') {
      switch (globalSettings.privacyOption) {
        case '1':
          zip.file("privacy.php", exportPrivacy1(globalSettings.email, globalSettings.url, globalSettings.country, globalSettings.name));
          break;
        case '2':
          zip.file("privacy.php", exportPrivacy2(globalSettings.email, globalSettings.url, globalSettings.country, globalSettings.name));
          break;
      }
    }else if(globalSettings.privacyOrTerms === 'terms') {
      switch (globalSettings.termsOption) {
        case '1':
          zip.file("terms.php", exportTerms1(globalSettings.email, globalSettings.url, globalSettings.country, globalSettings.name));
          break;
          case '2':
          zip.file("terms.php", exportTerms2(globalSettings.email, globalSettings.url, globalSettings.country, globalSettings.name));
          break;
      }
    }
    // Add .htaccess
    zip.file(
      ".htaccess",
      `RewriteEngine on
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

#the following two lines are non-www to www redirect
# RewriteCond %{HTTP_HOST} !^www\\. [NC]
# RewriteRule (.*) https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

RewriteRule ^index\\.php$ / [R=301,L]
RewriteRule ^(.*)/index\\.php$ /$1/ [R=301,L]

Options All -Indexes

ErrorDocument 404 /404.php

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.php -f
RewriteRule ^(.+)$ $1.php [L,QSA]

RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\\ /.*\\.php\\ HTTP/
RewriteRule ^(.*)\\.php$ /$1 [R=301,L]

#removes multiple trailing slashes
<IfModule mod_rewrite.c>
RewriteBase /

# rule 1: remove multiple leading slashes (directly after the TLD)
RewriteCond %{THE_REQUEST} \s/{2,}
RewriteRule (.*) $1 [R=301,L]

# rule 2: remove multiple slashes in the requested path
RewriteCond %{REQUEST_URI} ^(.*)/{2,}(.*)$
RewriteRule (.*) %1/%2 [R=301,L]
</IfModule>
`.trim(),
    );
    
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
      saveAs(content, `${globalSettings.domain || 'multi-page-website'}.zip`);
    });
  }

  const heroClass = globalSettings.heroBg
    ? "hero-section with-bg"
    : "hero-section gradient-bg";

  // Generate navigation items
  const visiblePages = pages.filter(page => !globalSettings.hiddenFromNav?.includes(page.id));
  const customNavItems = globalSettings.customNavItems || [];

  const currentYear = new Date().getFullYear();

  return (
    <div className="preview-container" 
      style={{
        '--body-bg-color': globalSettings.bodyBgColor || '#f8fafc',
        '--body-text-color': globalSettings.bodyTextColor || '#222222',
        '--heading-color': globalSettings.headingColor || '#222222',
        '--hero-gradient-1': globalSettings.heroGradient1 || '#667eea',
        '--hero-gradient-2': globalSettings.heroGradient2 || '#764ba2',
        '--footer-bg-color': globalSettings.footerBgColor || '#0d0d0d',
        '--link-color': globalSettings.linkColor || '#2563eb',
        '--header-bg-color': globalSettings.headerBgColor || '#ffffff',
        '--font-family': globalSettings.fontFamily && globalSettings.fontFamily !== 'system' ? globalSettings.fontFamily : 'system-ui',
      }}
    >
      <div className="preview-header d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
        <div>
          <h5 className="mb-0">Preview: {currentPage?.title || 'Untitled Page'}</h5>
          <small className="text-muted">
            {pages.length} page{pages.length !== 1 ? 's' : ''} total
          </small>
        </div>
        <button 
          className="btn btn-success"
          onClick={handleDownloadZip}
        >
          <i className="bi bi-download"></i> Download Multi-Page Site
        </button>
      </div>

      <div className="website-preview" lang={globalSettings.lang || 'en'}>
        {/* Navigation */}
        <nav className={`navbar navbar-expand-lg navbar-light${globalSettings.stickyNavbar ? " sticky-top" : ""}`}>
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
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                {visiblePages.map(page => (
                  <li key={page.id} className="nav-item">
                    <a 
                      className={`nav-link ${page.id === currentPage?.id ? 'active' : ''}`}
                      href={page.isHome ? "#" : `#${page.slug}`}
                    >
                      {page.navLabel || page.title}
                    </a>
                  </li>
                ))}
                {customNavItems.map(item => (
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
          className={heroClass}
          style={globalSettings.heroBg ? {
            backgroundImage: `url(${globalSettings.heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          } : {}}
        >
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="row justify-content-center text-center">
              <div className="col-lg-11">
                <h1 className="display-4 fw-bold text-white mb-4">
                  {formData.h1 || "Welcome to Your Website"}
                </h1>
                {formData.afterH1 && (
                  <p className="lead text-white mb-4">
                    {formData.afterH1}
                  </p>
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
                  © {currentYear} {globalSettings.domain || "Your Website"}. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <span className="me-3">Email: {globalSettings.email || `info[@]${globalSettings.domain || 'domain.com'}`}</span>
                <a href="#">{globalSettings.privacyOrTerms === "privacy" ? 'Privacy Policy' : "Terms & Conditions"}</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Preview;
