export function exportHtaccess(url) {
  const hasWww = url && url.includes("www.");
  const wwwRedirectRules = hasWww
    ? `
# non-www to www redirect
RewriteCond %{HTTP_HOST} !^www\\. [NC]
RewriteRule (.*) https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`
    : `
# www to non-www redirect
RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]`;

  return `
RewriteEngine on
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

${wwwRedirectRules}

RewriteRule ^index\\.php$ / [R=301,L]
RewriteRule ^(.*)/index\\.php$ /$1/ [R=301,L]

Options All -Indexes

ErrorDocument 404 /404.php

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.php -f
RewriteRule ^(.+)$ $1.php [L,QSA]

RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\\ /.*\\.php\\ HTTP/
RewriteRule ^(.*)\\.php$ /$1 [R=301,L]

#removes multiple trailing slashes
<IfModule mod_rewrite.c>
RewriteBase /

# rule 1: remove multiple leading slashes (directly after the TLD)
RewriteCond %{THE_REQUEST} \s/{2,}
RewriteRule (.*) $1 [R=301,L]

# rule 2: remove multiple slashes in the requested path
RewriteCond %{REQUEST_URI} ^(.*)/{2,}(.*)$
RewriteRule (.*) %1/%2 [R=301,L]
</IfModule>
`.trim();
}
