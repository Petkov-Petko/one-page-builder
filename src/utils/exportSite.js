import {
  NavigationHtml1,
  NavigationHero1,
} from "./siteStyles/navigation/style1";
import {
  NavigationHtml2,
  NavigationHero2,
} from "./siteStyles/navigation/style2";
import {
  NavigationHtml3,
  NavigationHero3,
} from "./siteStyles/navigation/style3";
import { FooterHtml1 } from "./siteStyles/footer/footerStyle1";
import { FooterHtml2 } from "./siteStyles/footer/footerStyle2";
import { FooterHtml3 } from "./siteStyles/footer/footerStyle3";
import { exportCss } from "./exportCss";

export function splitHtmlToSections(html) {
  const parts = html.split(/(<h2[\s\S]*?<\/h2>)/i).filter(Boolean);

  let prelude = "";
  let sections = [];
  let currentSection = "";
  let started = false;

  parts.forEach((part) => {
    const isH2 = /<h2[\s\S]*?<\/h2>/i.test(part);

    if (isH2) {
      if (!started) {
        started = true;
        currentSection = (prelude ? prelude : "") + part;
        prelude = "";
      } else {
        if (currentSection.trim()) {
          sections.push(`<section>${currentSection}</section>`);
        }
        currentSection = part;
      }
    } else {
      if (started) {
        currentSection += part;
      } else {
        prelude += part;
      }
    }
  });

  if (started && currentSection.trim()) {
    sections.push(`<section>${currentSection}</section>`);
  } else if (!started && prelude.trim()) {
    sections.push(`<section>${prelude}</section>`);
  }

  return sections.join("\n");
}

// Multi-page export function
export function generateMultiPageExport(pages, globalSettings) {
  const hiddenPages = globalSettings.hiddenFromNav || [];
  const visiblePages = pages.filter((page) => !hiddenPages.includes(page.id));

  const generateNavigation = () => {
    let navHtml = "";
    const customNavItems = globalSettings.customNavItems || [];

    const topLevelPages = visiblePages.filter((page) => !page.parentId);
    const childPages = visiblePages.filter((page) => page.parentId);

    topLevelPages.forEach((page) => {
      if (page.isDropdownParent) {
        const children = childPages.filter(
          (child) => child.parentId === page.id
        );

        // Check if dropdown has its own page
        if (page.hasOwnPage && page.slug) {
          navHtml += `
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/${
              page.slug
            }" role="button">
              ${page.title}
            </a>
            <ul class="custom-dropdown dropdown-menu">
              ${children
                .map(
                  (child) =>
                    `<li><a class="dropdown-item" href="/${child.slug}">${child.title}</a></li>`
                )
                .join("\n")}
            </ul>
          </li>
        `;
        } else {
          // Dropdown without own page - no href
          navHtml += `
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button">
              ${page.title}
            </a>
            <ul class="custom-dropdown dropdown-menu">
              ${children
                .map(
                  (child) =>
                    `<li><a class="dropdown-item" href="/${child.slug}">${child.title}</a></li>`
                )
                .join("\n")}
            </ul>
          </li>
        `;
        }
      } else {
        const href = page.isHome ? "/" : `/${page.slug}`;
        navHtml += `<li class="nav-item"><a class="nav-link" href="${href}">${page.title}</a></li>\n`;
      }
    });

    // Add custom navigation items
    customNavItems.forEach((item) => {
      navHtml += `<li class="nav-item">
      <a class="nav-link" href="${item.url}">
        ${item.label}
      </a>
    </li>\n`;
    });

    return navHtml;
  };

  // Generate functions.php with multi-page navigation
  const functions = generateMultiPageFunctions(
    globalSettings,
    generateNavigation(),
    visiblePages
  );

  // Generate combined CSS for all pages
  const styles = exportCss(globalSettings);

  // Generate individual page files
  const pageFiles = {};

  pages.forEach((page) => {
    // Skip dropdown parents that don't have their own page
    if (page.isDropdownParent && !page.hasOwnPage) {
      return;
    }

    // Skip pages without formData
    if (!page.formData) {
      return;
    }

    const filename = page.isHome ? "index.php" : `${page.slug}.php`;
    pageFiles[filename] = generatePagePhp(page, globalSettings);
  });
  return {
    pages: pageFiles,
    functions,
    styles,
  };
}

function generateMultiPageFunctions(globalSettings, navigationHtml, pages) {
  // Generate sidebar links dynamically from pages
  const sidebarLinks = pages
    .filter((page) => {
      if (page.isDropdownParent && !page.hasOwnPage) {
        return false;
      }
      return true;
    })
    .map((page) => {
      const href = page.isHome ? "/" : `/${page.slug}`;
      const label = page.title;
      return `<li><a href="${href}">${label}</a></li>`;
    })
    .join("\n              ");

  return `<?php
function site_header($title, $description)
{
  $canonical = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  ob_start(); ?>
<!DOCTYPE html>
<html lang="${globalSettings.lang || "en"}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <meta name="description" content="<?php echo $description; ?>">
    <link rel="canonical" href="<?php echo $canonical; ?>">
    ${
      globalSettings.favicon
        ? '<link rel="icon" type="image/png" href="/images/favicon.png">'
        : ""
    }
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
</head>
<body>
${
  globalSettings.navStyle === "1"
    ? NavigationHtml1(globalSettings, navigationHtml)
    : globalSettings.navStyle === "2"
    ? NavigationHtml2(globalSettings, navigationHtml)
    : NavigationHtml3(globalSettings, navigationHtml)
} 
<?php
  return ob_get_clean();
}
  ?>

  ${
    globalSettings.sidebar
      ? `
    <?php
    function sidebar()
    {
      ob_start(); ?>
    
      <div class="col-lg-4 col-xl-3 pt-3 d-flex flex-column align-items-center">
      ${
        pages.length > 1
          ? `  
          <div>
          <h2>Quick Links</h2>
            <ul class="sidebar-page-list">
              ${sidebarLinks}
            </ul>
      </div>`
          : ""
      }
     
        <div class="mb-2">
          <iframe width="279" height="330" class="rounded" src="https://www.youtube.com/embed/N6SY8uqaPZI" title="In 2022, the Brazilian Congress broke the record for changes to the country’s Constitution"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    
    <?php
      return ob_get_clean();
    }
    ?>
    `
      : ""
  }


<?php

function site_footer()
{
  ob_start(); ?>
${
  globalSettings.footerStyle === "1"
    ? FooterHtml1(globalSettings)
    : globalSettings.footerStyle === "2"
    ? FooterHtml2(globalSettings)
    : FooterHtml3(globalSettings)
}

    <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="/assets/js/main.js"></script>
</body>
</html>
<?php
  return ob_get_clean();
}
?>`;
}

function generatePagePhp(page, globalSettings) {
  return `<?php
require_once 'functions.php';

echo site_header("${page.formData.title || page.title}", "${
    page.formData.desc || ""
  }");
?>

${
  globalSettings.navStyle === "1"
    ? NavigationHero1(globalSettings, page)
    : globalSettings.navStyle === "2"
    ? NavigationHero2(globalSettings, page)
    : NavigationHero3(globalSettings, page)
}

<main class="container my-5">
  <div class="row">
    <div class="${
      globalSettings.sidebar ? "col-lg-8 col-xl-9" : "col-12"
    } content-area">
    ${
      splitHtmlToSections(page.formData.mainContent) ||
      '<div class="text-center text-muted py-5"><h3>No content added yet</h3><p>Add some content to see it here</p></div>'
    }
    </div>
    ${
      globalSettings.sidebar
        ? '<?php if (function_exists("sidebar")) echo sidebar(); ?>'
        : ""
    }
  </div>
</main>

<?php
echo site_footer();
?>`;
}
