export function exportSitemap(url, pages, privacyOrTerms, globalSettings = {}) {
  const baseUrl = url.endsWith("/") ? url.slice(0, -1) : url;
  let sitemapUrls = "";

  const validPages = pages.filter((page) => {
    if (page.isDropdownParent && !page.hasOwnPage) {
      return false;
    }

    if (!page.isHome && (!page.slug || page.slug.trim() === "")) {
      return false;
    }

    return true;
  });

  validPages.forEach((page) => {
    if (page.isHome) {
      sitemapUrls += `  <url>
    <loc>${baseUrl}/</loc>
  </url>
`;
    } else {
      sitemapUrls += `  <url>
    <loc>${baseUrl}/${page.slug}</loc>
  </url>
`;
    }
  });

  if (globalSettings.contactPage) {
    sitemapUrls += `  <url>
    <loc>${baseUrl}/contact</loc>
  </url>
`;
  }

  if (privacyOrTerms === "privacy") {
    sitemapUrls += `  <url>
    <loc>${baseUrl}/privacy</loc>
  </url>
`;
  } else if (privacyOrTerms === "terms") {
    sitemapUrls += `  <url>
    <loc>${baseUrl}/terms</loc>
  </url>
`;
  }

  return `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}</urlset>`.trim();
}
