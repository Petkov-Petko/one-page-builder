export function exportSitemap(url, pages, privacyOrTerms) {
    const baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    let sitemapUrls = '';

    pages.forEach(page => {
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

    if (privacyOrTerms === 'privacy') {
        sitemapUrls += `  <url>
    <loc>${baseUrl}/privacy</loc>
  </url>
`;
    } else if (privacyOrTerms === 'terms') {
        sitemapUrls += `  <url>
    <loc>${baseUrl}/terms</loc>
  </url>
`;
    }

    return `<?xml version="1.0" encoding="utf-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}</urlset>`.trim();
}