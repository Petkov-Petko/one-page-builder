export function FooterHtml2(globalSettings) {
  return `
    <footer class="footer mt-auto py-4">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-3">
           <img src="${
             globalSettings.logo
               ? "/images/logo.svg"
               : "https://placehold.co/220x50"
           }" alt="${
    globalSettings.name || globalSettings.domain || "Domain"
  }" width="220" height="50">
          </div>
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">© Copyright <?php echo date('Y'); ?> <span class="fw-bold">${
              globalSettings.domain || "Your Website"
            }</span> All rights reserved.</p>
          </div>
          <div class="col-md-6 text-md-end text-center d-flex flex-column flex-lg-row justify-content-center justify-content-md-end">
            <span class="me-3"><i class="bi bi-envelope pe-2"></i>${
              globalSettings.email ||
              `info[@]${globalSettings.domain || "domain.com"}`
            }</span>
            <a href="${
              globalSettings.privacyOrTerms === "privacy"
                ? "/privacy"
                : "/terms"
            }">${
    globalSettings.privacyOrTerms === "privacy"
      ? "Privacy Policy"
      : "Terms & Conditions"
  }</a>
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

export function FooterCss2() {
  return `
  .footer {
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
}

.footer a {
  text-decoration: none;
  color: var(--link-color) !important;
}
.footer a:hover {
  color: var(--link-color) !important;
  opacity: 0.8;
}
  `;
}
