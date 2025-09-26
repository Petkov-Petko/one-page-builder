export function exportMainJs(pages, sticky) {
  return `
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler  = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navLinks       = document.querySelectorAll(".navbar-nav .nav-link");

  // Normalize current path (remove trailing slash except for root)
  const currentPath = (function () {
    let p = window.location.pathname;
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p;
  })();

  ${
    pages.length > 1
      ? `
  // Highlight active link (multi-page)
  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const url  = href.startsWith("http") ? new URL(href, window.location.origin).pathname : href;
    const normalized = url.length > 1 && url.endsWith("/") ? url.slice(0, -1) : url;
    if (normalized === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });`
      : `// Single-page: update active link on scroll
  function updateActiveLink() {
    const scrollPosition = window.scrollY + 200; // offset for fixed nav
    navLinks.forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach((nl) => nl.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("load", updateActiveLink);`
  }

  ${
    !sticky
      ? `
  // Auto-close mobile nav on scroll
  let lastScrollY = window.scrollY;
  let scrollTimeout;
  window.addEventListener("scroll", function () {
    if (!navbarToggler || !navbarCollapse) return;
    // only run on mobile (toggler visible)
    if (window.getComputedStyle(navbarToggler).display === "none") return;

    const isNavOpen = navbarCollapse.classList.contains("show");
    if (!isNavOpen) return;

    const currentScrollY = window.scrollY;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        const inst = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
        inst.hide();
        if (navbarToggler) navbarToggler.setAttribute("aria-expanded", "false");
      }
      lastScrollY = currentScrollY;
    }, 100);
  }, { passive: true });
  `
      : ``
  }

  // Close on nav link click (mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (!navbarToggler || !navbarCollapse) return;
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        const inst = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
        inst.hide();
        navbarToggler.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Close when clicking outside the nav (mobile)
  document.addEventListener("click", function (event) {
    if (!navbarToggler || !navbarCollapse) return;

    const isClickInsideNav  = navbarCollapse.contains(event.target);
    const isClickOnToggler  = navbarToggler.contains(event.target);
    const isNavOpen         = navbarCollapse.classList.contains("show");

    if (!isClickInsideNav && !isClickOnToggler && isNavOpen) {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        const inst = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, { toggle: false });
        inst.hide();
        navbarToggler.setAttribute("aria-expanded", "false");
      }
    }
  });
});
  `;
}
