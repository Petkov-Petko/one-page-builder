export function NavigationHtml4(globalSettings, navigationHtml) {
  return `
        <nav class="navbar navbar-expand-xl navbar-light${
          globalSettings.stickyNavbar ? " sticky-top" : ""
        }">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${
        globalSettings.logo ? "/images/logo.svg" : "https://placehold.co/220x50"
      }" alt="${
    globalSettings.name || globalSettings.domain || "Domain"
  }" width="220" height="50">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        ${navigationHtml}
      </ul>
    </div>
  </div>
</nav>
    `;
}

export function NavigationHero4(globalSettings, page) {
  const heroClass = globalSettings.heroBg
    ? "hero-section with-bg"
    : "hero-section gradient-bg";

  return `
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1>
          ${page.formData.h1 || page.title}
        </h1>
        ${page.formData.afterH1 ? `<div>${page.formData.afterH1}</div>` : ""}
    </div>
  </div>
</section>
    `;
}

export function NavigationCSS4(globalSettings) {
  return `
 .navbar {
${
  globalSettings.stickyNavbar
    ? `  background-color: transparent !important;
  transition: background-color 0.4s ease, box-shadow 0.3s ease;
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;`
    : `  background-color: transparent !important;
  transition: background-color 0.4s ease, box-shadow 0.3s ease;
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;`
}

}
.navbar.scrolled {
  background-color: var(--header-bg-color) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.hero-section {
  padding: 115px 0 30px;
  position: relative;
  overflow: hidden;
  color: var(--header-text-color);
}

${
  globalSettings.heroBg
    ? `.hero-section.with-bg {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section.with-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgb(0, 0, 0));
  opacity: 0.5;
  z-index: 1;
}`
    : `.hero-section.gradient-bg {
  background: linear-gradient(135deg, var(--hero-gradient1), var(--hero-gradient2));
}`
}

.hero-section .container {
  position: relative;
  z-index: 2;
}

  
@media (max-width: 768px) {
  .hero-section {
    padding: 77px 0;
  }
  
}
  .navbar-light .navbar-nav .nav-link {
    color: var(--nav-link-color, #141414) !important;
  }

  .navbar-light .navbar-nav .nav-link.active {
  color: var(--link-color) !important;
  font-weight: bold;
}
  /* Mobile nav */
@media (max-width: 1199.98px) {
  .navbar-collapse {
    position: fixed;
    top: 61px;
    left: 15px;
    right: 15px;
    background-color: color-mix(in srgb, var(--header-bg-color) 65%, transparent);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    padding: 15px;
    margin: 0;
  }

  .navbar-nav {
    width: 100%;
  }

  .navbar-nav .nav-item {
    margin: 7px 0;
  }

  .navbar-nav .nav-item:hover {
    transform: translateY(-1px);
  }

  .navbar-nav .nav-link {
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: none;
    display: block;
    padding: 0;
  }

  .navbar-toggler {
    z-index: 10000;
    position: relative;
    border: var(--bs-border-width) solid var(--nav-link-color, #141414) !important;
  }
}


.custom-dropdown {
  border: 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  min-width: 220px;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 65%,
    transparent
  ) !important;
  backdrop-filter: blur(12px);
}

.custom-dropdown .dropdown-item {
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap;
}
.dropdown-menu {
  display: none;
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(
    in srgb,
    var(--header-bg-color) 95%,
    transparent
  ) !important;
}
.nav-item.dropdown > .nav-link {
  display: flex;
  align-items: center;
}

.nav-item.dropdown > .nav-link .arrow {
  position: relative;
  margin-left: auto;
  border: solid var(--nav-link-color, #141414);
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.25s;
}

.dropdown.open .dropdown-menu {
  display: block;
}

@media (min-width: 1200px) {
  .nav-item.dropdown {
    position: relative;
  }
  .nav-item.dropdown > .nav-link .arrow {
    margin-left: 7px;
  }
  .custom-dropdown.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0;
    z-index: 1000;
  }

  .nav-item.dropdown:hover > .nav-link .arrow {
    transform: rotate(-135deg);
  }
  .nav-item.dropdown:hover > .dropdown-menu {
    display: block !important;
  }
}
@media (max-width: 1199px) {
  .nav-item.dropdown > .nav-link .arrow {
    padding: 4px;
  }
}

            `;
}
