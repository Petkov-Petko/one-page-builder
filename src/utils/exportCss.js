import { NavigationCSS1 } from "./siteStyles/navigation/style1";
import { NavigationCSS2 } from "./siteStyles/navigation/style2";
import { NavigationCSS3 } from "./siteStyles/navigation/style3";
import { FooterCss1 } from "./siteStyles/footer/footerStyle1";
import { FooterCss2 } from "./siteStyles/footer/footerStyle2";
import { FooterCss3 } from "./siteStyles/footer/footerStyle3";
import { contactPageCss } from "./exportContact.js";
import { getHeadingsCss } from "./siteStyles/mainContent/headingsStyles.js";

export function exportCss(globalSettings) {
  return `

:root {
  --body-bg-color: ${globalSettings.bodyBgColor || "#f8fafc"};
  --body-text-color: ${globalSettings.bodyTextColor || "#222222"};
  --heading-color: ${globalSettings.headingColor || "#222222"};
  --hero-gradient1: ${globalSettings.heroGradient1 || "#667eea"};
  --hero-gradient2: ${globalSettings.heroGradient2 || "#764ba2"};
  --footer-bg-color: ${globalSettings.footerBgColor || "#0d0d0d"};
  --link-color: ${globalSettings.linkColor || "#2563eb"};
  --header-bg-color: ${globalSettings.headerBgColor || "#ffffff"};
  --font-family: ${
    globalSettings.fontFamily && globalSettings.fontFamily !== "system"
      ? globalSettings.fontFamily
      : "system-ui"
  };
  --nav-link-color: ${globalSettings.navLinkColor || "#141414"};
  --footer-text-color: ${globalSettings.footerTextColor || "#ffffff"};
  --header-text-color: ${globalSettings.headerTextColor || "#ffffffff"};
}
html {
  overflow-x: hidden;
}
body {
  background-color: var(--body-bg-color) !important;
  color: var(--body-text-color) !important;
  font-family: var(--font-family);
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
h1 {
    font-size: clamp(2rem, 4vw, 2.5rem) !important;
}
h2 {
    font-size: clamp(1.6rem, 3vw, 2rem) !important;
}
h3 {
    font-size: clamp(1.4rem, 3vw, 1.7rem) !important;
}
p {
  margin-bottom: 0.5rem !important;
}
  
  section {
  padding: 15px 0;
  scroll-margin-top: 70px;
}

h2, h3 {
  color: var(--heading-color) !important;
}

${getHeadingsCss(globalSettings)}

.content-area a {
  color: var(--link-color) !important;
  text-decoration: none !important;
}

.content-area a:hover {
  color: var(--link-color) !important;
  opacity: 0.8;
}

  .sidebar-page-list {
  padding: 0;
  margin: 0;
  margin-bottom: 17px;
  width: 279px;
}

.sidebar-page-list li {
  list-style-type: disc;
  list-style-position: inside;
  color: var(--heading-color);
}

.sidebar-page-list li::marker {
  color: var(--link-color);
  font-size: 1.2em;
}
.sidebar-page-list li:last-child {
  border-bottom: none;
}

.sidebar-page-list li a {
  padding: 12px 0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  color: var(--link-color);
}

.sidebar-page-list li a:hover {
  padding-left: 11px;
}
  ${
    globalSettings.sidebar
      ? `.twitter-tweet {
  width: 279px !important;
}

.x {
  display: flex;
  justify-content: center;
}`
      : ""
  }
.error_page {
  min-height: 70vh;
}

${
  globalSettings.footerStyle === "1"
    ? FooterCss1()
    : globalSettings.footerStyle === "2"
    ? FooterCss2()
    : FooterCss3()
}${
    globalSettings.whiteLogo
      ? `.footer img {
        filter: brightness(0) invert(1);
      }`
      : ""
  }
${
  globalSettings.navStyle === "1"
    ? NavigationCSS1(globalSettings)
    : globalSettings.navStyle === "2"
    ? NavigationCSS2(globalSettings)
    : NavigationCSS3(globalSettings)
}

${globalSettings.contactPage ? contactPageCss() : ""}
${
  globalSettings.scrollToTop
    ? `.scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: -15px;
  z-index: 99999;
  background-color: var(--link-color);
  width: 44px;
  height: 44px;
  border-radius: 50px;
  transition: all 0.4s;
}
.scroll-top i {
  font-size: 24px;
  color: var(--footer-bg-color);
  line-height: 0;
}
.scroll-top:hover {
  background-color: color-mix(in srgb, var(--link-color), transparent 20%);
  color: var(--footer-bg-color);
}
.scroll-top.active {
  visibility: visible;
  opacity: 1;
  bottom: 15px;
}
`
    : ""
}
`;
}
