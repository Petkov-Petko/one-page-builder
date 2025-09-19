export function contactPage1(email) {
  return `
    <?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Looking to connect? Use the contact page for questions, feedback, or support inquiries.';

echo site_header($title, $description);

?>
<div class="contact-container ">
    <div class="contact-header">
        <i class="bi bi-envelope-fill"></i>
        <h1>Contact Us</h1>
    </div>
    <form>
        <h2>Get in Touch</h2>
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Your name">
        </div>
        <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Your email">
        </div>
        <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea class="form-control" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" disabled class="btn btn-primary w-100">Send Message</button>
    </form>
    <p class="email-link"><i class="bi bi-envelope-at"></i> ${email}</p>
</div>

<?php echo site_footer(); ?>
    `;
}
export function contactPage2(email) {
  return `
<?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Need assistance or have a question? Contact us directly — we’re here to listen and help.';

echo site_header($title, $description);

?>
<div class="contact-container">
    <div class="contact-header">
        <i class="bi bi-send-fill"></i>
        <h1>Say Hello</h1>
        <p class="text-muted">We’d love to hear from you. Fill out the form below.</p>
    </div>
    <form>
        <h2>Get in Touch</h2>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-person"></i> Your Name</label>
            <input type="text" class="form-control" placeholder="John Doe">
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-envelope"></i> Your Email</label>
            <input type="email" class="form-control" placeholder="you@example.com">
        </div>
        <div class="mb-3">
            <label class="form-label"><i class="bi bi-pencil-square"></i> Message</label>
            <textarea class="form-control" rows="6" placeholder="Write something nice..."></textarea>
        </div>
        <div class="d-grid gap-2">
            <button type="submit" disabled class="btn btn-outline-primary">
                <i class="bi bi-send"></i> Send Message
            </button>
        </div>
    </form>
    <p class="email-link">
        <i class="bi bi-envelope-paper"></i> ${email}
    </p>
</div>
<?php echo site_footer(); ?>
    `;
}

export function contactPageCss() {
  return `
    .contact-container {
  width: 500px;
  margin: 100px auto 35px;
  padding: 15px 21px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  color: black !important;
}

@media screen and (max-width: 768px) {
  .contact-container {
    width: 100%;
    padding: 15px;
  }
}
.contact-header {
  text-align: center;
  margin-bottom: 20px;
}

.contact-header i {
  font-size: 2rem;
  color: #0d6efd;
  margin-bottom: 10px;
}

.email-link {
  display: block;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  color: #0d6efd;
  text-decoration: none;
}`;
}
