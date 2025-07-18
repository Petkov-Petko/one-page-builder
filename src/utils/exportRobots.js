export function exportRobots(url, pages) {
    return `User-agent: *
Allow: /*.css
Allow: /*.js

#optional

User-agent: Googlebot-News
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Video
Allow: /

User-agent: Googlebot-Mobile
Allow: /

User-agent: Mediapartners-Google
Allow: /

User-agent: Adsbot-Google
Allow: /

User-agent: ia_archiver
Disallow: /

#end optional

${pages.length > 1 ? `Sitemap: ${url || 'domain.com'}/sitemap.xml` : ''}`
}