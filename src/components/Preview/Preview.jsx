import React from "react";
import "./Preview.css";
import { generateMultiPageExport } from "../../utils/exportSite";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {
  errorPage1,
  errorPage2,
  errorPage3,
  errorPage4,
  errorPage5,
  errorPage6,
} from "../../utils/export404";
import { exportHtaccess } from "../../utils/exportHtaccess";
import { exportPrivacy1, exportPrivacy2 } from "../../utils/exportPrivacy";
import { exportTerms1, exportTerms2 } from "../../utils/exportTerms";
import { exportRobots } from "../../utils/exportRobots";
import { exportSitemap } from "../../utils/exportSitemap";
import { storage } from "../../utils/localStorage";
import { exportMainJs } from "../../utils/exportJs";
import {
  FooterHtml1,
  FooterCss1,
} from "../../utils/siteStyles/footer/footerStyle1";
import {
  FooterHtml2,
  FooterCss2,
} from "../../utils/siteStyles/footer/footerStyle2";
import {
  FooterHtml3,
  FooterCss3,
} from "../../utils/siteStyles/footer/footerStyle3";
import { Navigation1JsxElement } from "../../utils/siteStyles/navigation/style1Preview";
import { Navigation2JsxElement } from "../../utils/siteStyles/navigation/style2Preview";
import { Navigation3JsxElement } from "../../utils/siteStyles/navigation/style3Preview";
import { Navigation4JsxElement } from "../../utils/siteStyles/navigation/style4Preview";
import { getHeadingsCss } from "../../utils/siteStyles/mainContent/headingsStyles";
import { setConfig, logClick, fetchTable } from "../../utils/clicksService";
import {
  cssBodyPattern,
  chooseContactPageHtml,
  heroClass,
} from "../../utils/helpers";

const Preview = ({
  formData,
  globalSettings,
  pages,
  currentPage,
  storedImages = [],
}) => {
  const WEB_APP_URL = import.meta.env.VITE_APP_WEB_APP_URL || "";
  const SHARED_KEY = import.meta.env.VITE_APP_SHARED_KEY || "";
  const heroClassValue = heroClass(globalSettings);

  React.useEffect(() => {
    setConfig({ webAppUrl: WEB_APP_URL, sharedKey: SHARED_KEY });
    fetchTable().catch((e) => setError(e.message));
  }, []);
  const handleClick = async () => {
    try {
      await logClick(1);
    } catch (e) {
      console.error("Click logging failed:", e);
    }
  };

  const handleClearStorage = () => {
    if (
      window.confirm(
        "⚠️ This will delete all your work and start fresh.\n\nAre you sure you want to clear all saved data? This action cannot be undone."
      )
    ) {
      storage.clearAll();

      alert(
        "✅ All data has been cleared successfully!\n\nThe page will now reload with a fresh start."
      );
      window.location.reload();
    }
  };

  const replacePreviewImagesWithPaths = (pages, storedImages) => {
    if (!storedImages || storedImages.length === 0) {
      console.log("📭 No stored images to process");
      return pages;
    }

    const imageReplacements = new Map();

    storedImages.forEach((img, index) => {
      if (img.b64_json && img.filename) {
        imageReplacements.set(img.b64_json, img.filename);
        console.log(`📋 Mapped image ${index + 1}: ${img.filename}`);
      }
    });

    console.log(`📋 Created ${imageReplacements.size} image mappings`);

    return pages.map((page) => {
      if (!page.formData?.mainContent) return page;

      let updatedContent = page.formData.mainContent;

      const dataUrlPattern = /src="data:image\/(jpe?g|png);base64,([^"]+)"/g;
      let replacementCount = 0;

      updatedContent = updatedContent.replace(
        dataUrlPattern,
        (match, imageType, base64Data) => {
          console.log(
            `🔍 Found ${imageType} image (${base64Data.length} chars)`
          );

          const filename = imageReplacements.get(base64Data);
          if (filename) {
            replacementCount++;
            console.log(`✅ Replaced with: images/${filename}`);
            return `src="/images/${filename}"`;
          }

          console.warn(`⚠️ No mapping found for this base64 data`);
          return match;
        }
      );

      return {
        ...page,
        formData: {
          ...page.formData,
          mainContent: updatedContent,
        },
      };
    });
  };

  const getRandomErrorPage = () => {
    const errorPages = [errorPage1, errorPage2, errorPage3, errorPage4, errorPage5, errorPage6];
    const randomIndex = Math.floor(Math.random() * errorPages.length);
    return errorPages[randomIndex];
  };

  const validateRequiredFields = () => {
    const missingFields = [];

    if (!globalSettings.url?.trim()) {
      missingFields.push("Website URL");
    }
    if (!globalSettings.name?.trim()) {
      missingFields.push("Website Name");
    }
    if (!globalSettings.domain?.trim()) {
      missingFields.push("Website Domain");
    }
    if (!globalSettings.email?.trim()) {
      missingFields.push("Website Email");
    }

    return {
      isValid: missingFields.length === 0,
      missingFields,
    };
  };

  const validation = validateRequiredFields();
  const isDownloadDisabled = !validation.isValid;
  const handleDownloadClick = () => {
    if (!validation.isValid) {
      alert(
        `Please fill in the following required fields in Global Settings:\n\n• ${validation.missingFields.join(
          "\n• "
        )}\n\nThese fields are required for generating the website files.`
      );
      return;
    }

    handleDownloadZip();
    handleClick();
  };

  async function handleDownloadZip() {
    const zip = new JSZip();

    if (globalSettings.contactPage) {
      globalSettings.contactRandomIndex = Math.floor(Math.random() * 3) + 1;
    }

    const pagesWithProperPaths = replacePreviewImagesWithPaths(
      pages,
      storedImages
    );

    // Generate multi-page website files
    const multiPageExport = generateMultiPageExport(
      pagesWithProperPaths,
      globalSettings
    );
    console.log(globalSettings);
    console.log(pages);

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
      const bootstrapCssResponse = await fetch(
        "/one-page-builder/bootstrap/css/bootstrap.min.css"
      );
      const bootstrapCssBlob = await bootstrapCssResponse.blob();
      zip.file("assets/bootstrap/css/bootstrap.min.css", bootstrapCssBlob);

      // Add Bootstrap JS
      const bootstrapJsResponse = await fetch(
        "/one-page-builder/bootstrap/js/bootstrap.min.js"
      );
      const bootstrapJsBlob = await bootstrapJsResponse.blob();
      zip.file("assets/bootstrap/js/bootstrap.min.js", bootstrapJsBlob);
    } catch (error) {
      console.warn("Could not add Bootstrap files to download:", error);
    }

    //AI-generated images to ZIP
    if (storedImages && storedImages.length > 0) {
      console.log(
        `🖼️ Adding ${storedImages.length} AI-generated images to ZIP`
      );
      console.log(
        "📋 Stored images:",
        storedImages.map((img) => ({
          filename: img.filename,
          hasData: !!img.b64_json,
        }))
      );
      for (const imageData of storedImages) {
        try {
          if (!imageData.b64_json) {
            console.error(`❌ No base64 data for ${imageData.filename}`);
            continue;
          }
          // Convert base64 to binary
          const binaryString = atob(imageData.b64_json);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }

          // Add image to ZIP in images folder
          zip.file(`images/${imageData.filename}`, bytes);
          console.log(`Added AI image: ${imageData.filename}`);
        } catch (imageError) {
          console.error(
            `Error processing AI image ${imageData.filename}:`,
            imageError
          );
        }
      }
    }

    // Add 404.php
    zip.file("404.php", getRandomErrorPage()(heroClassValue));
    // Add contact page if enabled
    if (globalSettings.contactPage) {
      zip.file(
        "contact.php",
        chooseContactPageHtml(globalSettings.contactRandomIndex, globalSettings)
      );
    }
    // Add robots.txt
    zip.file(
      "robots.txt",
      exportRobots(globalSettings.url, pages, globalSettings.contactPage)
    );

    // Add sitemap.xml
    if (pages.length > 1 || globalSettings.contactPage) {
      zip.file(
        "sitemap.xml",
        exportSitemap(
          globalSettings.url,
          pages,
          globalSettings.privacyOrTerms,
          globalSettings
        )
      );
    }
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
              heroClassValue
            )
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
              heroClassValue
            )
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
              heroClassValue
            )
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
              heroClassValue
            )
          );
          break;
      }
    }
    // Add .htaccess
    zip.file(".htaccess", exportHtaccess(globalSettings.url));
    // Add main.js
    zip.file(
      "assets/js/main.js",
      exportMainJs(
        pages,
        globalSettings.stickyNavbar,
        globalSettings.scrollToTop,
        globalSettings.navStyle
      )
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
    if (globalSettings.heroBg && globalSettings.heroBg.startsWith("data:") && !globalSettings.transparentHero) {
      const res = await fetch(globalSettings.heroBg);
      const blob = await res.blob();
      zip.file("images/hero-bg.jpg", blob);
    }

    // Add body background if it exists
    if (globalSettings.bodyBg && globalSettings.bodyBg.startsWith("data:")) {
      const res = await fetch(globalSettings.bodyBg);
      const blob = await res.blob();
      zip.file("images/body-bg.jpg", blob);
    }

    // Generate and trigger download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, `${globalSettings.domain || "multi-page-website"}.zip`);
    });
  }

  // Generate navigation items
  const visiblePages = pages.filter(
    (page) => !globalSettings.hiddenFromNav?.includes(page.id)
  );
  const customNavItems = globalSettings.customNavItems || [];

  // Group pages by parent for dropdown functionality
  const topLevelPages = visiblePages.filter((page) => !page.parentId);
  const childPages = visiblePages.filter((page) => page.parentId);

  const realPageCount = pages.filter((page) => {
    if (page.isDropdownParent && !page.hasOwnPage) {
      return false;
    }
    return true;
  }).length;

  const getFooterCss = () => {
    const footerStyle = globalSettings.footerStyle || "1";

    let css = "";
    switch (footerStyle) {
      case "2":
        css = FooterCss2 ? FooterCss2() : FooterCss1();
        break;
      case "3":
        css = FooterCss3 ? FooterCss3() : FooterCss1();
        break;
      case "1":
      default:
        css = FooterCss1();
    }

    // 🔥 NEW: Add white logo CSS if enabled
    if (globalSettings.whiteLogo) {
      css += `
      .footer img {
        filter: brightness(0) invert(1);
      }
    `;
    }

    return css;
  };

  const getFooterHtml = () => {
    const footerStyle = globalSettings.footerStyle || "1";

    let footerHtml;
    switch (footerStyle) {
      case "2":
        footerHtml = FooterHtml2
          ? FooterHtml2(globalSettings)
          : FooterHtml1(globalSettings);
        break;
      case "3":
        footerHtml = FooterHtml3
          ? FooterHtml3(globalSettings)
          : FooterHtml1(globalSettings);
        break;
      case "1":
      default:
        footerHtml = FooterHtml1(globalSettings);
    }

    const currentYear = new Date().getFullYear();
    footerHtml = footerHtml.replace("<?php echo date('Y'); ?>", currentYear);

    if (globalSettings.logo && globalSettings.logo.startsWith("data:")) {
      footerHtml = footerHtml.replace(
        /src="\/images\/logo\.svg"/g,
        `src="${globalSettings.logo}"`
      );
    }
    return footerHtml;
  };

  return (
    <div
      className="preview-container"
      style={{
        "--body-bg-color": globalSettings.bodyBgColor || "#f8fafc",
        "--body-text-color": globalSettings.bodyTextColor || "#222222",
        "--heading-color": globalSettings.headingColor || "#222222",
        "--hero-gradient-1": globalSettings.heroGradient1 || "#168295",
        "--hero-gradient-2": globalSettings.heroGradient2 || "#0b5e3a",
        "--footer-bg-color": globalSettings.footerBgColor || "#0d0d0d",
        "--link-color": globalSettings.linkColor || "#2563eb",
        "--header-bg-color": globalSettings.headerBgColor || "#ffffff",
        "--font-family":
          globalSettings.fontFamily && globalSettings.fontFamily !== "system"
            ? globalSettings.fontFamily
            : "system-ui",
        "--nav-link-color": globalSettings.navLinkColor || "#141414",
        "--footer-text-color": globalSettings.footerTextColor || "#ffffff",
        "--header-text-color": globalSettings.headerTextColor || "#ffffffff",
      }}
    >
      <style
        dangerouslySetInnerHTML={{ __html: getHeadingsCss(globalSettings) }}
      />
      <style dangerouslySetInnerHTML={{ __html: getFooterCss() }} />

      <div
        className="preview-header d-flex justify-content-between align-items-center p-3 bg-light border-bottom"
        id="preview-header"
      >
        <div>
          <h5 className="mb-0 fw-bold">
            Preview: {currentPage?.title || "Untitled Page"}
          </h5>
          <small className="text-muted">
            {realPageCount} page{realPageCount !== 1 ? "s" : ""} total
          </small>
        </div>
        <div className="d-flex flex-column gap-2 align-items-end">
          <div className="d-flex align-items-center gap-3 mb-1">
            <h5 className="delete-button-title">Clear All Data</h5>
            <button
              className="btn btn-outline-danger btn-sm delete-button"
              onClick={handleClearStorage}
              title="Clear all saved data and start fresh"
            >
              <span class="back"></span>
              <span class="front"></span>
            </button>
          </div>

          <button
            className={`download-button btn ${
              isDownloadDisabled ? "btn-secondary" : "btn-success"
            }`}
            onClick={handleDownloadClick}
            disabled={isDownloadDisabled}
            title={
              isDownloadDisabled
                ? `Missing required fields: ${validation.missingFields.join(
                    ", "
                  )}`
                : "Download your website"
            }
          >
            <i class="bi bi-cloud-arrow-down pe-1"></i>Download
          </button>

          {isDownloadDisabled && (
            <small className="text-danger mt-1 text-end">
              Missing: {validation.missingFields.join(", ")}
            </small>
          )}
        </div>
      </div>

      <div
        className={`website-preview `}
        lang={globalSettings.lang || "en"}
        style={
          globalSettings.bodyBg
            ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${globalSettings.bodyBg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }
            : {}
        }
      >
        <style>
          {cssBodyPattern(globalSettings.bodyPattern, ".website-preview")}
        </style>

        <>
          {globalSettings.navStyle === "1" && (
            <Navigation1JsxElement
              globalSettings={globalSettings}
              topLevelPages={topLevelPages}
              childPages={childPages}
              currentPage={currentPage}
              customNavItems={customNavItems}
            />
          )}

          {globalSettings.navStyle === "2" && (
            <Navigation2JsxElement
              globalSettings={globalSettings}
              topLevelPages={topLevelPages}
              childPages={childPages}
              currentPage={currentPage}
              customNavItems={customNavItems}
            />
          )}

          {globalSettings.navStyle === "3" && (
            <Navigation3JsxElement
              globalSettings={globalSettings}
              topLevelPages={topLevelPages}
              childPages={childPages}
              currentPage={currentPage}
              customNavItems={customNavItems}
            />
          )}
          {globalSettings.navStyle === "4" && (
            <Navigation4JsxElement
              globalSettings={globalSettings}
              topLevelPages={topLevelPages}
              childPages={childPages}
              currentPage={currentPage}
              customNavItems={customNavItems}
            />
          )}
        </>
        {/* Hero Section */}
        <section
          id="preview-hero"
          className={`${heroClassValue} ${
            globalSettings.navStyle === "2" && "second-style"
          } ${globalSettings.navStyle === "4" && "fourth-style"} ${
            globalSettings.transparentHero ? "transparent-hero" : ""
          }`}
          style={
            globalSettings.heroBg && !globalSettings.transparentHero
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
                <h1 className="display-4 fw-bold mb-4">
                  {formData.h1 || "Welcome to Your Website"}
                </h1>
                {formData.afterH1 && (
                  <div dangerouslySetInnerHTML={{ __html: formData.afterH1 }} />
                )}
              </div>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <main className="container py-5">
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
        <div dangerouslySetInnerHTML={{ __html: getFooterHtml() }} />
        {globalSettings.scrollToTop && (
          <a
            href="#"
            id="scroll-top"
            className="scroll-top d-flex align-items-center justify-content-center"
          >
            {" "}
            <i className="bi bi-arrow-up-short" />{" "}
          </a>
        )}
      </div>
    </div>
  );
};

export default Preview;
