export function generateFunctionsPhp(formData) {
  return `
<?php
function site_header($title, $description)
{
  $canonical = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  ob_start(); ?>


    <!DOCTYPE html>
    <html lang="${formData.lang || "en"}">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title;?></title>
    <meta name="description" content="<?php echo $description ?>">
    <link rel="canonical" href="<?php echo $canonical;?>">
    <link rel="stylesheet" href="/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-light ${formData.stickyNavbar ? " sticky-top" : ""}">
      <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${formData.logo ? "/logo.svg" : "https://placehold.co/220x50"}" alt="${formData.domain}" width="220" height="50">
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
      <a href="/" class="px-1 sitename">${formData.domain || "domain.com"}</a>
      <span>All Rights reserved</span>
      </p>
      <div class="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1 gap-sm-3">
      <p>Email: info[@]${formData.domain || "domain.com"}</p>
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

export function generateExportPhp(formData) {
  const mainContentHtml = splitHtmlToSections(formData.mainContent || "");
  return `
<?php include 'functions.php';
$title = "${formData.title || "Website Title"}";
$description = "${formData.desc || ""}";
echo site_header($title, $description);
?>

 <header class="hero-section${formData.heroBg ? " with-bg" : " gradient-bg"}" 
      ${formData.heroBg ? `style="background-image:url('/hero-bg.jpg');"` : ""}>
      <div class="hero-content container">
      <h1 class="hero-title">${formData.h1 || "Main Heading"}</h1>
      ${formData.afterH1
      ? `<div class="hero-afterh1">${formData.afterH1
        .split("\n")
        .filter((p) => p.trim() !== "")
        .map((p) => `<p>${p}</p>`)
        .join("")
      }</div>`
      : ""
    }
      </div>
    </header>
    <main class="main-content container py-5">
      ${mainContentHtml || ""}
    </main>

<?php echo site_footer();?>
`.trim();
}

export function generateExportCss(formData) {
  return `
:root {
  --body-bg-color: ${formData.bodyBgColor || "#f8fafc"};
  --body-text-color: ${formData.bodyTextColor || "#222222"};
  --heading-color: ${formData.headingColor || "#222222"};
  --font-family: ${formData.fontFamily && formData.fontFamily !== "system" ? formData.fontFamily : "system-ui"};
  --hero-gradient1: ${formData.heroGradient1 || "#667eea"};
  --hero-gradient2: ${formData.heroGradient2 || "#764ba2"};
  --footer-bg-color: ${formData.footerBgColor || "#667eea"};
--link-color: ${formData.linkColor || "#2563eb"};
  --header-bg-color: ${formData.headerBgColor || "#fff"};
}
body {
  background: var(--body-bg-color) !important;
  color: var(--body-text-color) !important;
  font-family: var(--font-family) !important;
  overflow-x: hidden;
}
h1 {
  font-size: clamp(2rem, 4vw, 2.5rem) !important;
}
h2 {
  font-size: clamp(1.6rem, 3vw, 2rem) !important;
  color: var(--heading-color);
}
h3 {
  font-size: clamp(1.4rem, 3vw, 1.7rem) !important;
}
p {
  margin-bottom: 0.5rem !important;
}
h2 {
    color: var(--heading-color);
  }
    section {
      padding: 17px 0;
    }
.main-content a,
.footer a {
    color: var(--link-color, #2563eb) !important;
    transition: color 0.2s;
}
    .main-content a:hover,
.footer a:hover {
    color: color-mix(in srgb, var(--link-color) 80%, black) !important;
}

   .navbar.sticky-top {
    position: sticky;
    top: 0;
    z-index: 1020;
    box-shadow: 0 2px 12px 0 rgba(99, 102, 241, 0.08);
}
.navbar {
    background: var(--header-bg-color, #fff) !important;
}
 .navbar-toggler {
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    background: #2d2d2d8e;
    transition: background 0.2s;
}

 .navbar-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255,255,255,0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

 .navbar-toggler:focus,
 .navbar-toggler:hover {
    background: var(--link-color);
}

 .navbar-collapse {
    border-radius: 0 0 12px 12px;
    margin-top: 0.5rem;
    padding: 0.5rem 0;
}

@media (max-width: 991.98px) {
     .navbar-collapse {
        position: absolute;
        top: 100%;
        right: 16px;
        left: auto;
        z-index: 100;
        background: #f8fafc;
        border-radius: 15px;
        margin-top: 0.5rem;
        padding: 0.5rem 0;
        max-width: 320px;
        width: 90vw;
    }

     .navbar-nav .nav-link {
        padding: 0.75rem 1.5rem;
        font-size: 1.15rem;
        border-radius: 6px;
        margin: 0.25rem 0;
        text-align: center;
    }

     .navbar-nav .nav-link.active,
     .navbar-nav .nav-link:focus,
     .navbar-nav .nav-link:hover {
        background: var(--link-color);
        color: #fff !important;
    }
}
  .hero-section {
    position: relative;
    width: 100%;
    min-height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-section.with-bg {
    background-size: cover;
    background-position: center;
    color: #fff;
    position: relative;
  }
  .hero-section.with-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 1;
    pointer-events: none;
  }
  .hero-section.gradient-bg {
    background: linear-gradient(135deg, var(--hero-gradient1, #667eea) 0%, var(--hero-gradient2, #764ba2) 100%);
    color: #fff;
    position: relative;
  }
  .hero-content {
    position: relative;
    z-index: 2;
    padding: 64px 0;
    text-align: center;
    width: 100%;
  }
  .hero-afterh1 {
    margin-top: 1.5rem;
    font-size: 1.25rem;
    margin-left: auto;
    margin-right: auto;
  }
  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .footer {
   font-size: 1rem;
  border-top: 1px solid #e5e7eb;
 padding: 11px 0;
  background: var(--footer-bg-color, #667eea);
  color: #fff;
  }
  .sitename {
    font-weight: 600;
    color: #fff;
    text-decoration: underline;
  }
  .footer a {
    color: #fff;
  text-decoration: none;
    } 
 .footer p {
   margin-bottom: 0 !important;
  }
  .footer a:hover {
    text-decoration: none;
  }
  `;
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

export function generateExportHtml(formData, cssFileName = "style.css") {
  const mainContentHtml = splitHtmlToSections(formData.mainContent || "");
  return `
    <!DOCTYPE html>
    <html lang="${formData.lang || "en"}">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formData.title || "Website Title"}</title>
    <meta name="description" content="${formData.desc || ""}">
    <link rel="stylesheet" href="/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-light ${formData.stickyNavbar ? " sticky-top" : ""}">
      <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${formData.logo ? "/logo.svg" : "https://placehold.co/220x50"}" alt="${formData.domain}" width="220" height="50">
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
    <header class="hero-section${formData.heroBg ? " with-bg" : " gradient-bg"}" 
      ${formData.heroBg ? `style="background-image:url('/hero-bg.jpg');"` : ""}>
      <div class="hero-content container">
      <h1 class="hero-title">${formData.h1 || "Main Heading"}</h1>
      ${formData.afterH1
      ? `<div class="hero-afterh1">${formData.afterH1
        .split("\n")
        .filter((p) => p.trim() !== "")
        .map((p) => `<p>${p}</p>`)
        .join("")
      }</div>`
      : ""
    }
      </div>
    </header>
    <main class="main-content container py-5">
      ${mainContentHtml || ""}
    </main>
    <footer class="footer" id="footer">
      <div class="container-fluid mt-4 pb-3">
      <div class="d-flex justify-content-center flex-column flex-md-row justify-content-md-between align-items-center">
      <p class="text-center mb-2 mb-md-0">
      © <span>Copyright</span> {{YEAR}}
      <a href="/" class="px-1 sitename">${formData.domain || "domain.com"}</a>
      <span>All Rights reserved</span>
      </p>
      <div class="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1 gap-sm-3">
      <p>Email: info[@]${formData.domain || "domain.com"}</p>
      <a href="/privacy">Privacy Policy</a>
      </div>
      </div>
      </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script>
      document.body.innerHTML = document.body.innerHTML.replace('{{YEAR}}', new Date().getFullYear());
    </script>
    </body>
    </html>
    `.trim();
}