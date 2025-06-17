import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          © Copyright {new Date().getFullYear()} <a href="/">petkov-petko.github.io/one-page-builder</a>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
