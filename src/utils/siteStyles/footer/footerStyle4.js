export function FooterHtml4(globalSettings, topLevelPages, childPages) {
  return `
 
       <footer class="footer mt-auto py-4">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-4 text-center text-lg-start">
            <img src="/images/logo.svg" alt="Meme Guide" width="220" height="50" class="mb-3">
          </div>
          <div class="col-lg-4 text-center text-lg-start">
            <h5 class="footer-title">Quick Links</h5>
            <ul class="footer-links">
       ${(topLevelPages || [])
         .map((page) => `<li><a href="${page.url}">${page.title}</a></li>`)
         .join("")}
            ${(childPages || [])
              .map((page) => `<li><a href="${page.url}">${page.title}</a></li>`)
              .join("")}
            </ul>
          </div>
          <div class="col-lg-4 text-center text-lg-start">
            <h5 class="footer-title">Meme Newsletter</h5>
            <p class="footer-text">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form class="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                required>
              <button disabled type="submit">Subscribe</button>
            </form>
          </div>

        </div>
        <hr class="footer-divider">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">
              © Copyright <?php echo date('Y'); ?>
              <span class="fw-bold">${
                globalSettings.domain || "Your Website"
              }</span> — All rights reserved.
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
          <a href="${
            globalSettings.privacyOrTerms === "privacy" ? "/privacy" : "/terms"
          }">🔒 ${
    globalSettings.privacyOrTerms === "privacy"
      ? "Privacy Policy"
      : "Terms & Conditions"
  }</a>
         ${
           globalSettings.contactPage
             ? `<a class="pe-2" href="/contact">Contacts</a>`
             : `<span><span class="footer-icon">✉️</span> ${
                 globalSettings.email ||
                 `info[@]${globalSettings.domain || "domain.com"}`
               }</span>`
         }
          </div>
        </div>
      </div>
    </footer>
      ${
        globalSettings.scrollToTop
          ? `      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
`
          : ""
      }
  `;
}

export function FooterCss4() {
  return `.footer{background:var(--footer-bg-color);color:var(--footer-text-color);border-top:1px solid var(--link-color)}.footer a {text-decoration: none;color: var(--footer-text-color) !important;}.footer-title{font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1rem;position:relative}.footer-links{list-style:none;padding:0;margin:0}.footer-links li{margin-bottom:.6rem}.footer-links a{text-decoration:none;transition:all .3s ease}.footer-links a:hover{padding-left:6px}.newsletter-form{display:flex;flex-direction:column;gap:.6rem;margin-top:1rem}.newsletter-form input{flex:1;padding:.6rem .9rem;border-radius:8px;border:0;outline:0;background:color-mix(in srgb,var(--footer-bg-color) 80%,white 20%);color:var(--footer-text-color)}.newsletter-form input::placeholder{color:var(--footer-text-color)}.newsletter-form button{padding:.6rem 1.1rem;border-radius:8px;border:0;font-weight:600;background:var(--link-color);color:var(--footer-text-color);transition:all .3s ease}.newsletter-form button:hover{background:color-mix(in srgb,var(--link-color) 80%,white 20%)}.footer-divider{margin:1.5rem 0;border-color:var(--link-color)} `;
}
