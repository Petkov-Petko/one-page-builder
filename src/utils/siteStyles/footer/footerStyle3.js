export function FooterHtml3(globalSettings) {
  return `
    <footer class="footer-news">
      <div class="container">
        <div class="footer-top d-flex flex-column flex-lg-row justify-content-between align-items-center mb-4">
          <div class="footer-contact text-center text-lg-start mb-3 mb-lg-0">
            <p class="mb-0">© Copyright <?php echo date('Y'); ?> ${
              globalSettings.domain || "Your Website"
            }. All rights reserved.</p>
          </div>
          <div class="footer-links text-center text-lg-end d-flex flex-column flex-sm-row align-items-center gap-3">
            ${
              globalSettings.contactPage
                ? `<a class="pe-2" href="/contact">Contacts</a>`
                : `<span>✉️ ${
                    globalSettings.email ||
                    `info[@]${globalSettings.domain || "domain.com"}`
                  }</span>`
            }
            <a href="${
              globalSettings.privacyOrTerms === "privacy"
                ? "/privacy"
                : "/terms"
            }">🔒 ${
    globalSettings.privacyOrTerms === "privacy"
      ? "Privacy Policy"
      : "Terms & Conditions"
  }</a>
          </div>
        </div>
        <div class="footer-newsletter text-center mb-4">
          <h3>Our Newsletter</h3>
          <form class="newsletter-form d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
            <input type="email" placeholder="Your email" required>
            <button type="submit" disabled>Subscribe</button>
          </form>
        </div>
        <div class="footer-social text-center d-flex justify-content-center">
          <span class="social-icon"><i class="bi bi-facebook"></i></span>
          <span class="social-icon"><i class="bi bi-twitter"></i></span>
          <span class="social-icon"><i class="bi bi-youtube"></i></span>
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

export function FooterCss3() {
  return `
  .footer-news {
  background: var(--footer-bg-color);
  border-top: 3px solid var(--link-color);
  padding: 2.5rem 1rem;
  border-radius: 12px 12px 0 0;
  position: relative;
  overflow: hidden;
  color: var(--footer-text-color);

}

.footer-news a {
  color: var(--link-color);
  text-decoration: none;
  position: relative;
}

.footer-news a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: var(--link-color);
  transition: width 0.3s ease;
}

.footer-news a:hover::after {
  width: 100%;
}

.footer-newsletter h3 {
  color: var(--footer-text-color) !important;
  margin-bottom: 1rem;
  font-weight: 600;
}

.newsletter-form input {
  padding: 0.6rem 1rem;
  border: 1px solid var(--link-color);
  border-radius: 5px;
  font-size: 1rem;
}

.newsletter-form button {
  padding: 0.6rem 1.5rem;
  border: none;
  background: var(--link-color);
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.newsletter-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 143, 106, 0.2);
}
.footer-social .social-icon {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--link-color);
  width: 40px;
  height: 40px;
  line-height: 40px;
  border: 2px solid var(--link-color);
  border-radius: 50%;
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.footer-social .social-icon:hover {
  transform: scale(1.2) rotate(-10deg);
  background: var(--link-color);
  color: #fff;
}

.footer-news::after {
  right: 10px;
  top: auto;
  bottom: 10px;
  left: auto;
}

/* Responsive */
@media (max-width: 767px) {
  .newsletter-form input,
  .newsletter-form button {
    width: 100%;
  }
}
  `;
}
