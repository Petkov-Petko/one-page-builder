import { NavigationHtml1, NavigationHero1, NavigationCSS1 } from "./siteStyles/navigation/style1";
import { NavigationHtml2, NavigationHero2, NavigationCSS2 } from "./siteStyles/navigation/style2";

export function splitHtmlToSections(html) {
  const parts = html.split(/(<h2[\s\S]*?<\/h2>)/i).filter(Boolean);
  let sections = [];
  let currentSection = "";

  parts.forEach(part => {
    if (part.match(/<h2[\s\S]*?<\/h2>/i)) {
      if (currentSection) {
        sections.push(`<section>${currentSection}</section>`);
        currentSection = "";
      }
      currentSection += part;
    } else {
      currentSection += part;
    }
  });
  if (currentSection) {
    sections.push(`<section>${currentSection}</section>`);
  }
  return sections.join("\n");
}

// Multi-page export function
export function generateMultiPageExport(pages, globalSettings) {
  const hiddenPages = globalSettings.hiddenFromNav || [];
  const visiblePages = pages.filter(page => !hiddenPages.includes(page.id));

  // Generate navigation HTML
  const generateNavigation = () => {
    let navHtml = '';
    const customNavItems = globalSettings.customNavItems || [];


    // Group pages by parent
    const topLevelPages = visiblePages.filter(page => !page.parentId);
    const childPages = visiblePages.filter(page => page.parentId);

    topLevelPages.forEach(page => {
      if (page.isDropdownParent) {
        // Create dropdown
        const children = childPages.filter(child => child.parentId === page.id);
        navHtml += `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/${page.slug}" role="button">
            ${page.navLabel || page.title}
          </a>
          <ul class="custom-dropdown dropdown-menu">
            ${children.map(child =>
          `<li><a class="dropdown-item" href="/${child.slug}">${child.navLabel || child.title}</a></li>`
        ).join('\n')}
          </ul>
        </li>
      `;
      } else {
        // Regular nav item
        const href = page.isHome ? '/' : `/${page.slug}`;
        navHtml += `<li class="nav-item"><a class="nav-link" href="${href}">${page.navLabel || page.title}</a></li>\n`;
      }
    });

    // Add custom navigation items
    customNavItems.forEach(item => {
      navHtml += `<li class="nav-item">
      <a class="nav-link" href="${item.url}">
        ${item.label}
      </a>
    </li>\n`;
    });

    return navHtml;
  };

  // Generate functions.php with multi-page navigation
  const functions = generateMultiPageFunctions(globalSettings, generateNavigation(), visiblePages);

  // Generate combined CSS for all pages
  const styles = generateMultiPageCss(pages, globalSettings);

  // Generate individual page files
  const pageFiles = {};

  pages.forEach(page => {
    const filename = page.isHome ? 'index.php' : `${page.slug}.php`;
    pageFiles[filename] = generatePagePhp(page, globalSettings);
  });

  return {
    pages: pageFiles,
    functions,
    styles
  };
}

function generateMultiPageFunctions(globalSettings, navigationHtml, pages) {
  // Generate sidebar links dynamically from pages
  const sidebarLinks = pages.map(page => {
    const href = page.isHome ? '/' : `/${page.slug}`;
    const label = page.navLabel || page.title;
    return `<li><a href="${href}">${label}</a></li>`;
  }).join('\n              ');

  return `<?php
function site_header($title, $description)
{
  $canonical = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  ob_start(); ?>
<!DOCTYPE html>
<html lang="${globalSettings.lang || 'en'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <link rel="canonical" href="<?php echo $canonical; ?>">
    <link rel="stylesheet" href="/style.css">
    ${globalSettings.favicon ? '<link rel="icon" type="image/png" href="/images/favicon.png">' : ''}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
${globalSettings.navStyle === "1" ? NavigationHtml1(globalSettings, navigationHtml) : NavigationHtml2(globalSettings, navigationHtml)}
<?php
  return ob_get_clean();
}
  ?>

  ${globalSettings.sidebar ? `
    <?php
    function sidebar()
    {
      ob_start(); ?>
    
      <div class="col-lg-4 col-xl-3 pt-3 d-flex flex-column align-items-center">
      ${pages.length > 1 ? `  
          <div>
          <h2>Quick Links</h2>
            <ul class="sidebar-page-list">
              ${sidebarLinks}
            </ul>
      </div>` : ""}
          <div class="x mb-3">
        <blockquote class="twitter-tweet">
          <p lang="pt" dir="ltr">Varna, Bulgaria 🇧🇬 <a href="https://t.co/e2MyIvZY4O">pic.twitter.com/e2MyIvZY4O</a></p>&mdash; Digital Nomad Destinations (@Nomad_Destiny) <a href="https://twitter.com/Nomad_Destiny/status/1941950564067164491?ref_src=twsrc%5Etfw">July 6, 2025</a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
        <div class="mb-2">
          <iframe width="279" height="330" class="rounded" src="https://www.youtube.com/embed/N6SY8uqaPZI" title="In 2022, the Brazilian Congress broke the record for changes to the country’s Constitution"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    
    <?php
      return ob_get_clean();
    }
    ?>
    ` : ""}


<?php

function site_footer()
{
  ob_start(); ?>
<footer class="footer mt-auto py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-6 text-center text-md-start">
        <p class="mb-0">© Copyright <?php echo date('Y'); ?> ${globalSettings.domain || 'Your Website'}. All rights reserved.</p>
      </div>
      <div class="col-md-6 text-md-end text-center d-flex flex-column flex-md-row justify-content-center justify-content-md-end">
      <span class="me-3">Email: ${globalSettings.email || `info[@]${globalSettings.domain || 'domain.com'}`}</span>
        <a href="${globalSettings.privacyOrTerms === "privacy" ? '/privacy' : '/terms'}">${globalSettings.privacyOrTerms === "privacy" ? 'Privacy Policy' : 'Terms & Conditions'}</a>
      </div>
    </div>
  </div>
</footer>

    <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
<?php
  return ob_get_clean();
}
?>`;
}

function generateMultiPageCss(pages, globalSettings) {
  // Use global settings for all styles
  return `
:root {
  --body-bg-color: ${globalSettings.bodyBgColor || '#f8fafc'};
  --body-text-color: ${globalSettings.bodyTextColor || '#222222'};
  --heading-color: ${globalSettings.headingColor || '#222222'};
  --hero-gradient1: ${globalSettings.heroGradient1 || '#667eea'};
  --hero-gradient2: ${globalSettings.heroGradient2 || '#764ba2'};
  --footer-bg-color: ${globalSettings.footerBgColor || '#0d0d0d'};
  --link-color: ${globalSettings.linkColor || '#2563eb'};
  --header-bg-color: ${globalSettings.headerBgColor || '#ffffff'};
  --font-family: ${globalSettings.fontFamily && globalSettings.fontFamily !== 'system' ? globalSettings.fontFamily : 'system-ui'};
  --nav-link-color: ${globalSettings.navLinkColor || '#141414'};
}

body {
  background-color: var(--body-bg-color) !important;
  color: var(--body-text-color) !important;
  font-family: var(--font-family), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
  color: white;
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
  ${globalSettings.sidebar ? `.twitter-tweet {
  width: 279px !important;
}

.x {
  display: flex;
  justify-content: center;
}` : ""}
.error_page {
  min-height: 70vh;
}

${globalSettings.navStyle === "1" ? NavigationCSS1(globalSettings) : NavigationCSS2(globalSettings)}
`;
}

function generatePagePhp(page, globalSettings) {
  return `<?php
require_once 'functions.php';

echo site_header("${page.formData.title || page.title}", "${page.formData.desc || ''}");
?>

${globalSettings.navStyle === "1" ? NavigationHero1(globalSettings, page) : NavigationHero2(globalSettings, page)}

<main class="container my-5">
  <div class="row">
    <div class="${globalSettings.sidebar ? 'col-lg-8 col-xl-9' : 'col-12'} content-area">
    ${splitHtmlToSections(page.formData.mainContent) || '<div class="text-center text-muted py-5"><h3>No content added yet</h3><p>Add some content to see it here</p></div>'}
    </div>
    ${globalSettings.sidebar ? '<?php if (function_exists("sidebar")) echo sidebar(); ?>' : ''}
  </div>
</main>

<?php
echo site_footer();
?>`;
}