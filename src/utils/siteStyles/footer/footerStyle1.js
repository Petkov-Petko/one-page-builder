export function FooterHtml1(globalSettings) {
  return `
<footer class="footer mt-auto py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-6 text-center text-md-start">
        <p class="mb-0">© Copyright <?php echo date('Y'); ?> ${
          globalSettings.domain || "Your Website"
        }. All rights reserved.</p>
      </div>
      <div class="col-md-6 text-md-end text-center d-flex flex-column flex-lg-row justify-content-center justify-content-md-end">
      <span class="me-3">Email: ${
        globalSettings.email ||
        `info[@]${globalSettings.domain || "domain.com"}`
      }</span>
        <a href="${
          globalSettings.privacyOrTerms === "privacy" ? "/privacy" : "/terms"
        }">${
    globalSettings.privacyOrTerms === "privacy"
      ? "Privacy Policy"
      : "Terms & Conditions"
  }</a>
      </div>
    </div>
  </div>
  ${
    globalSettings.scrollToTop
      ? `      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
`
      : ""
  }
</footer>
  `;
}

export function FooterCss1() {
  return `
    .footer {
  background-color: var(--footer-bg-color);
  color: var(--footer-text-color);
}

.footer a {
  text-decoration: none;
  color: var(--link-color) !important;
}`;
}
