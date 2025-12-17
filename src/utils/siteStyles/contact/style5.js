export function contactPage5(email, heroClass) {
  return `
  
<?php include 'functions.php';
$title = 'Contact Us - page';
$description = 'Get in touch with us using the contact form or email provided.';

echo site_header($title, $description);

?>
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>Get in Touch</h1>
    </div>
  </div>
</section>
<section class="container">
  <div class="screen">
    <div class="screen-body">
      <div class="screen-body-item left">
        <div class="app-title">
          <h2>CONTACT US</h2>
        </div>
        <div class="app-contact">
          <p>CONTACT INFO : ${email}</p>
        </div>
      </div>
      <div class="screen-body-item">
        <div class="app-form">
          <div class="app-form-group">
            <input class="app-form-control" placeholder="NAME">
          </div>
          <div class="app-form-group">
            <input class="app-form-control" placeholder="EMAIL">
          </div>
          <div class="app-form-group">
            <input class="app-form-control" placeholder="SUBJECT">
          </div>
          <div class="app-form-group message">
            <input class="app-form-control" placeholder="MESSAGE">
          </div>
          <div class="app-form-group buttons">
            <button class="app-form-button" disabled>SEND</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<?php echo site_footer(); ?>
    `;
}
export function contactPage5Css() {
  return `.screen {
  position: relative;
  background: #e0dfdf;
  border-radius: 15px;
  margin: 50px 0;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}


.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--hero-gradient2);
  font-size: 26px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: var(--link-color);
}

.app-contact {
  margin-top: auto;
  color: var(--body-text-color);
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #000;
  font-size: 14px;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #000;
}

.app-form-button {
  background: var(--footer-bg-color);
  border: 2px solid var(--hero-gradient2);
  color: var(--link-color);
  font-size: 14px;
  cursor: pointer;
  outline: none;
  border-radius: 20px;
  padding: 5px 20px;
}

.app-form-button:hover {
  color: var(--hero-gradient1);
}

.dribbble {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}`;
}
