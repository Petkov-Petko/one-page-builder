export function contactPage3(email, heroBg) {
  const heroClass = heroBg
    ? "hero-section with-bg"
    : "hero-section gradient-bg";

  return `
  
<?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Need assistance or have a question? Contact us directly — we’re here to listen and help.';

echo site_header($title, $description);

?>
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>Contact Us</h1>
    </div>
  </div>
</section>
<div class="contact-container ">
    <form class="form">
        <h2>Drop a Line</h2>
        <p>Name: <input placeholder="Write your name here.."></p>
        <p>Email: <input placeholder="Let us know how to contact you back.."></p>
        <p>Message: <input placeholder="What would you like to tell us.."></p>
        <button disabled>Send</button>
        <div class="mail-container">
            <p><i class="bi bi-envelope-fill ms-3 me-2 mb-0"></i> ${email}</p>
        </div>
    </form>
</div>
<?php echo site_footer(); ?>
    `;
}
export function contactPage3Css() {
  return `.contact-container {
  margin: 40px auto;
  border-radius: 8px;
  color: black !important;
}
@media screen and (max-width: 768px) {
  .contact-container {
    width: 100%;
    padding: 15px;
  }
}
.contact-container .form {
  width: 440px;
  height: 510px;
  background: #E6E6E6;
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  position: relative;
}
.contact-container h2 {
  margin: 10px 0;
  padding-bottom: 10px;
  width: 320px;
  color: var(--hero-gradient1);
  border-bottom: 3px solid var(--hero-gradient2);
}
.contact-container input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
  border-bottom: 2px solid var(--hero-gradient1);
}
.contact-container input:focus {
  border-bottom: 2px solid var(--hero-gradient1);
}
.contact-container p:before {
  content: attr(type);
  display: block;
  margin: 28px 0 0;
  font-size: 14px;
  color: var(--hero-gradient1);
}
.contact-container button {
  float: right;
  padding: 8px 12px;
  margin: 8px 0 0;
  font-family: "Montserrat", sans-serif;
  border: 2px solid var(--hero-gradient1);
  background: 0;
  color: var(--hero-gradient1);
  cursor: pointer;
  transition: all 0.3s;
}
.contact-container button:hover {
  background: var(--hero-gradient2);
  color: #fff;
}
.contact-container .mail-container {
  content: "";
  position: absolute;
  bottom: -15px;
  right: -20px;
  background: var(--hero-gradient1);
  color: #fff;
  width: 320px;
  padding: 16px 4px 16px 0;
  border-radius: 6px;
  font-size: 13px;
  box-shadow: 10px 10px 40px -14px #000;
}
.contact-container .mail-container p:before {
  content: none;
}
.contact-container span {
  margin: 0 5px 0 15px;
}`;
}
