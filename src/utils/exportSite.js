export function generateFunctionsPhp(globalSettings) {
  return `
<?php
function site_header($title, $description)
{
  $canonical = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  ob_start(); ?>


    <!DOCTYPE html>
    <html lang="${globalSettings.lang || "en"}">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title;?></title>
    <meta name="description" content="<?php echo $description ?>">
    <link rel="canonical" href="<?php echo $canonical;?>">
    <link rel="stylesheet" href="/style.css">
    ${globalSettings.favicon ? '<link rel="icon" type="image/png" href="/images/favicon.png">' : ''}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
    <nav class="navbar navbar-expand-xl navbar-light ${globalSettings.stickyNavbar ? " sticky-top" : ""}">
      <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${globalSettings.logo ? "/images/logo.svg" : "https://placehold.co/220x50"}" alt="${globalSettings.domain}" width="220" height="50">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" aria-current="page" href="#section1">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#section2">About</a></li>
      <li class="nav-item"><a class="nav-link" href="#section3">Contact</a></li>
      </ul>
      </div>
      </div>
    </nav>
<?php
  return ob_get_clean();
}

?>

<?php
function site_footer()
{
  ob_start(); ?>

  <footer class="footer" id="footer">
      <div class="container-fluid mt-4 pb-3">
      <div class="d-flex justify-content-center flex-column flex-md-row justify-content-md-between align-items-center">
      <p class="text-center mb-2 mb-md-0">
      © <span>Copyright</span> <?php echo date('Y');?>
      <a href="/" class="px-1 sitename">${globalSettings.domain || "domain.com"}</a>
      <span>All Rights reserved</span>
      </p>
      <div class="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1 gap-sm-3">
      <p>Email: info[@]${globalSettings.domain || "domain.com"}</p>
      <a href="/privacy">Privacy Policy</a>
      </div>
      </div>
      </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>

<?php
  return ob_get_clean();
}
`.trim();
}
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
  const customNavItems = globalSettings.customNavItems || [];

  // Generate navigation HTML
  const generateNavigation = () => {
    let navHtml = '';

    visiblePages.forEach(page => {
      const href = page.isHome ? '/' : `/${page.slug}`;
      navHtml += `<li class="nav-item"><a class="nav-link" href="${href}">${page.navLabel || page.title}</a></li>\n`;
    });

    customNavItems.forEach(item => {
      const target = item.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      navHtml += `<li class="nav-item"><a class="nav-link" href="${item.url}"${target}>${item.label}</a></li>\n`;
    });

    return navHtml;
  };

  // Generate functions.php with multi-page navigation
  const functions = generateMultiPageFunctions(globalSettings, generateNavigation());

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

function generateMultiPageFunctions(globalSettings, navigationHtml) {
  return `<?php
function site_header($title, $description, $lang = 'en')
{
  $canonical = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  ob_start(); ?>
<!DOCTYPE html>
<html lang="<?php echo $lang; ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <link rel="canonical" href="<?php echo $canonical; ?>">
    <link rel="stylesheet" href="/style.css">
    ${globalSettings.favicon ? '<link rel="icon" type="image/png" href="/images/favicon.png">' : ''}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
<nav class="navbar navbar-expand-xl navbar-light${globalSettings.stickyNavbar ? ' sticky-top' : ''}">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${globalSettings.logo ? "/images/logo.svg" : "https://placehold.co/220x50"}" alt="${globalSettings.domain || 'Website'}" width="220" height="50">
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
      <span class="me-3">Email: info[@]${globalSettings.domain || 'domain.com'}</span>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
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

h1, h2, h3, h4, h5, h6 {
  color: var(--heading-color);
}

a {
  color: var(--link-color) !important;
}

a:hover {
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

.content-area {
  line-height: 1.8;
}

.content-area h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--link-color);
}

.content-area p {
  margin-bottom: 1.2rem;
}

main {
  flex: 1;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0;
  }
  
  .hero-section h1 {
    font-size: 2rem;
  }
}
  /* Mobile nav */
@media (max-width: 1200px) {
  .navbar-collapse {
    position: fixed;
    top: 61px;
    left: 15px;
    right: 15px;
    background: rgba(255, 255, 255, 0.97);
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
`;
}

function generatePagePhp(page, globalSettings) {
  const heroClass = page.formData.heroBg ? 'hero-section with-bg' : 'hero-section gradient-bg';
  const heroStyle = page.formData.heroBg ? `style="background-image: url('/images/hero-bg${page.isHome ? '' : '-' + page.slug}.jpg');"` : '';

  return `<?php
require_once 'functions.php';

echo site_header("${page.formData.title || page.title}", "${page.formData.desc || ''}", '${globalSettings.lang || 'en'}');
?>

<section class="${heroClass}" ${heroStyle}>
  <div class="container">
    <div class="justify-content-center text-center">
        <h1 class="text-white">
          ${page.formData.h1 || page.title}
        </h1>
        ${page.formData.afterH1 ? `<p class="text-white mb-4">${page.formData.afterH1}</p>` : ''}
    </div>
  </div>
</section>

<main class="container my-5">
  <div class="row">
    <div class="col-lg-12">
    ${splitHtmlToSections(page.formData.mainContent) || '<div class="text-center text-muted py-5"><h3>No content added yet</h3><p>Add some content to see it here</p></div>'}
    </div>
  </div>
</main>

<?php
echo site_footer();
?>`;
}