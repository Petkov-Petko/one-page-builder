import { NavigationCSS1 } from "./siteStyles/navigation/style1";
import { NavigationCSS2 } from "./siteStyles/navigation/style2";

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

.content-area a {
  color: var(--link-color) !important;
  text-decoration: none !important;
}

.content-area a:hover {
  color: var(--link-color) !important;
  opacity: 0.8;
}

.footer {
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
}

.footer a {
  text-decoration: none;
  color: var(--link-color) !important;
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
  globalSettings.navStyle === "1"
    ? NavigationCSS1(globalSettings)
    : NavigationCSS2(globalSettings)
}
`;
}
