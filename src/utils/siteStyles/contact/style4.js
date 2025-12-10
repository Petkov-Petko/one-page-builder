export function contactPage4(email, heroClass) {

  return `
  
<?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Get in touch with us for inquiries, support, or feedback. We are here to help you with any questions you may have.';

echo site_header($title, $description);

?>
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>Contact Us</h1>
    </div>
  </div>
</section>
<section class="contact-section py-5" id="contact">
  <div class="container">
    <div class="row align-items-stretch g-4">
      <div class="col-md-5">
        <div class="h-100 contact-info-card">
          <h2>Contact Details</h2>
          <p>
            We read every message and do our best to reply within a reasonable
            timeframe.
          </p>
          <div class="contact-info-item">
            <span class="label">Email</span>
            <span>${email}</span>
          </div>
          <p class="mb-0 small text-muted">
            Prefer email? Just send us your questions, ideas, or feedback
            anytime.
          </p>
        </div>
      </div>
      <div class="col-md-7">
        <div class="h-100 contact-form-card">
          <form action="#" method="post">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label" for="name">Name</label>
                <input
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div class="col-md-6">
                <label class="form-label" for="email">Email</label>
                <input
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>
              <div class="col-12">
                <label class="form-label" for="subject">Subject</label>
                <input
                  class="form-control"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                />
              </div>
              <div class="col-12">
                <label class="form-label" for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  placeholder="Share a bit about what you’re looking for..."
                  required
                  rows="5"
                ></textarea>
              </div>
              <div class="col-12 text-end">
                <button class="btn contact-submit-btn" disabled type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


<?php echo site_footer(); ?>
    `;
}
export function contactPage4Css() {
  return `.contact-email {
  color: var(--link-color);
  font-weight: 600;
  text-decoration: none;
}
.contact-email:hover {
  text-decoration: underline;
}
.contact-form-card,
.contact-info-card {
  background: var(--header-bg-color);
  color: var(--nav-link-color);
  border-radius: 16px;
  padding: 24px 22px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.04);
}
.contact-info-card h2 {
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--nav-link-color) !important;
}
.contact-info-item {
  margin-top: 18px;
}
.contact-info-item .label {
  display: block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
  margin-bottom: 4px;
}
.contact-form-card .form-label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--nav-link-colo);
}
.contact-form-card .form-control {
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 0.95rem;
  padding: 0.55rem 0.75rem;
  background-color: #fff;
}
.contact-form-card .form-control::placeholder {
  color: #9ca3af;
}
.contact-form-card .form-control:focus {
  border-color: var(--hero-gradient1);
  box-shadow: 0 0 0 0.15rem rgba(22, 130, 149, 0.2);
}
.contact-submit-btn {
  background: linear-gradient(
    135deg,
    var(--hero-gradient1),
    var(--hero-gradient2)
  );
  border: 0;
  color: #fff !important;
  padding: 0.6rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}`;
}
