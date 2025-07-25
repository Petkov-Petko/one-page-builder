export function NavigationHtml2(globalSettings, navigationHtml) {

    return `
        <nav class="navbar navbar-expand-xl navbar-light container floating-rounded-navbar">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="${globalSettings.logo ? "/images/logo.svg" : "https://placehold.co/220x50"}" alt="${globalSettings.name || globalSettings.domain || 'Domain'}" width="220" height="50">
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
    `
}


export function NavigationHero2(globalSettings, page) {
    const heroClass = globalSettings.heroBg ? 'hero-section with-bg' : 'hero-section gradient-bg';

    return `
<section class="${heroClass}">
  <div class="container">
    <div class="justify-content-center text-center">
        <h1 class="text-white">
          ${page.formData.h1 || page.title}
        </h1>
        ${page.formData.afterH1 ? `<div class="text-white">${page.formData.afterH1}</div>` : ''}
    </div>
  </div>
</section>
    `
}


export function NavigationCSS2(globalSettings) {
    return `
 .navbar {
  background-color: var(--header-bg-color) !important;
  ${globalSettings.stickyNavbar ? 'position: sticky; top: 0; z-index: 1020;' : ''}
}

.hero-section {
 padding: 115px 0 25px 0;
   position: relative;
  overflow: hidden;
}

.hero-section.gradient-bg {
  background: linear-gradient(135deg, var(--hero-gradient1), var(--hero-gradient2));
}

.hero-section.with-bg {
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
}

.hero-section .container {
  position: relative;
  z-index: 2;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
  
  .navbar-light .navbar-nav .nav-link {
    color: var(--nav-link-color, #141414) !important;
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

@media screen and (min-width: 1199.98px) {
.dropdown-menu {
    top: 100%;
    left: 50% !important;
    transform: translateX(-50%);
  }
}

.navbar .dropdown-toggle::after {
  transition: transform .3s ease
}

.dropdown:hover .dropdown-toggle::after {
  transform: rotate(180deg)
}

.custom-dropdown {
  border: 0;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .15);
  border-radius: 12px;
  padding: .5rem 0;
  margin-top: .5rem;
  min-width: 220px;
  background: color-mix(in srgb, var(--header-bg-color) 65%, transparent) !important;
  backdrop-filter: blur(12px)
}

.custom-dropdown .dropdown-item {
  padding: .75rem 1.5rem;
  transition: all .3s ease;
  color: var(--nav-link-color, #141414) !important;
  font-weight: 500;
  border-radius: 0;
  text-wrap: wrap
}

.custom-dropdown .dropdown-item:hover {
  color: #fff;
  background: color-mix(in srgb, var(--header-bg-color) 95%, transparent) !important;
}

.custom-dropdown .dropdown-item i {
  width: 16px;
  color: #6c757d;
  transition: color .3s ease
}

.custom-dropdown .dropdown-item:hover i {
  color: #fff
}

.dropdown-menu {
  opacity: 0;
  transition: all .3s ease;
  display: block;
  visibility: hidden
}

.dropdown-menu.show {
  opacity: 1;
  transform: translateY(0);
  visibility: visible
}

@media (min-width:1199.98px) {
  .custom-dropdown {
    max-width: 200px
  }
}

@media (max-width:1199.98px) {
  .custom-dropdown {
    background: #f8f9fa;
    box-shadow: none;
    border-radius: 0;
    margin-top: 0;
    border-top: 1px solid #dee2e6
  }

  .custom-dropdown .dropdown-item:hover {
    margin: 0;
    border-radius: 0;
    transform: none
  }
}

.dropdown-menu:hover,
.dropdown:hover .dropdown-menu {
  display: block !important;
  visibility: visible;
  opacity: 1
}
.dropdown-item.active,
.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #91919131 !important;
}

.floating-rounded-navbar {
  background-color: var(--header-bg-color) !important;
  position: ${globalSettings.stickyNavbar ? 'fixed' : 'absolute'} !important;
  top: 15px !important;
  left: 7px !important;
  right: 7px !important;
  width: calc(100% - 11px) !important;
  z-index: 2000;
  border-radius: 21px;
  transition: all 0.3s ease;
}


@media (max-width: 1199.98px) {
  .floating-rounded-navbar .navbar-collapse {
    top: 85px !important;
  }
}

.navbar-brand {
  margin-right: 0 !important;
}
            `
}