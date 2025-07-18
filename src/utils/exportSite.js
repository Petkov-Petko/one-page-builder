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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-expand-xl navbar-light${globalSettings.stickyNavbar ? ' sticky-top' : ''}">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${globalSettings.logo ? "/images/logo.svg" : "https://placehold.co/220x50"}" alt="${globalSettings.name || globalSettings.domain || 'Domain'}" width="220" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        ${navigationHtml}
      </ul>
    </div>
  </div>
</nav>
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

.navbar {
  background-color: var(--header-bg-color) !important;
  ${globalSettings.stickyNavbar ? 'position: sticky; top: 0; z-index: 1020;' : ''}
}

.hero-section {
  padding: 55px 0;
  position: relative;
  overflow: hidden;
}

.hero-section.gradient-bg {
  background: linear-gradient(135deg, var(--hero-gradient1), var(--hero-gradient2));
}

.hero-section.with-bg {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section.with-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgb(0, 0, 0));
  opacity: 0.5;
  z-index: 1;
}

.hero-section .container {
  position: relative;
  z-index: 2;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

h2, h3 {
  color: var(--heading-color);
}

.content-area a {
  color: var(--link-color) !important;
}

.content-area a:hover {
  color: var(--link-color);
  opacity: 0.8;
}

.footer {
  background-color: var(--footer-bg-color);
  color: white;
}

.footer a {
  text-decoration: none;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
}
  .navbar-light .navbar-nav .nav-link {
    color: var(--nav-link-color, #141414) !important;
  }
  /* Mobile nav */
@media (max-width: 1199.98px) {
  .navbar-collapse {
    position: fixed;
    top: 61px;
    left: 15px;
    right: 15px;
    background: rgb(205 205 205 / 79%);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    padding: 15px;
    margin: 0;
  }

  .navbar-nav {
    width: 100%;
  }

  .navbar-nav .nav-item {
    margin: 7px 0;
  }

  .navbar-nav .nav-item:hover {
    transform: translateY(-1px);
  }

  .navbar-nav .nav-link {
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    display: block;
    padding: 0;
  }

  .navbar-toggler {
    z-index: 10000;
    position: relative;
  }
}

@media screen and (min-width: 1199.98px) {
.dropdown-menu {
    top: 100%;
    left: 50% !important;
    transform: translateX(-50%);
  }
}

.navbar .dropdown-toggle::after {
  transition: transform .3s ease
}

.dropdown:hover .dropdown-toggle::after {
  transform: rotate(180deg)
}

.custom-dropdown {
  border: 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .15);
  border-radius: 12px;
  padding: .5rem 0;
  margin-top: .5rem;
  min-width: 220px;
  background: rgba(255, 255, 255, .98);
  backdrop-filter: blur(10px)
}

.custom-dropdown .dropdown-item {
  padding: .75rem 1.5rem;
  transition: all .3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  border-radius: 8px
}

.custom-dropdown .dropdown-item i {
  width: 16px;
  color: #6c757d;
  transition: color .3s ease
}

.custom-dropdown .dropdown-item:hover i {
  color: #fff
}

.dropdown-menu {
  opacity: 0;
  transition: all .3s ease;
  display: block;
  visibility: hidden
}

.dropdown-menu.show {
  opacity: 1;
  transform: translateY(0);
  visibility: visible
}

@media (min-width:1199.98px) {
  .custom-dropdown {
    max-width: 200px
  }
}

@media (max-width:1199.98px) {
  .custom-dropdown {
    background: #f8f9fa;
    box-shadow: none;
    border-radius: 0;
    margin-top: 0;
    border-top: 1px solid #dee2e6
  }

  .custom-dropdown .dropdown-item:hover {
    margin: 0;
    border-radius: 0;
    transform: none
  }
}

.dropdown-menu:hover,
.dropdown:hover .dropdown-menu {
  display: block !important;
  visibility: visible;
  opacity: 1
}
.dropdown-item.active,
.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #91919131 !important;
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


`;
}

function generatePagePhp(page, globalSettings) {
  const heroClass = globalSettings.heroBg ? 'hero-section with-bg' : 'hero-section gradient-bg';

  return `<?php
require_once 'functions.php';

echo site_header("${page.formData.title || page.title}", "${page.formData.desc || ''}");
?>

<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1 class="text-white">
          ${page.formData.h1 || page.title}
        </h1>
        ${page.formData.afterH1 ? `<div class="text-white">${page.formData.afterH1}</div>` : ''}
    </div>
  </div>
</section>

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