export function Navigation1JsxElement({
  globalSettings,
  topLevelPages,
  childPages,
  currentPage,
  customNavItems,
}) {
  if (globalSettings?.navStyle !== "1") return null;

  return (
    <nav
      className={[
        "navbar",
        "navbar-expand-lg",
        "navbar-light",
        globalSettings?.stickyNavbar ? "sticky-top" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={globalSettings?.logo || "https://placehold.co/220x50"}
            alt="Logo"
            width={220}
            height={50}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {topLevelPages.map((page) => {
              if (page.isDropdownParent) {
                const children = childPages.filter(
                  (child) => child.parentId === page.id
                );
                return (
                  <li key={page.id} className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {page.navLabel || page.title}
                    </a>
                    <ul className="custom-dropdown dropdown-menu">
                      {children.map((child) => (
                        <li key={child.id}>
                          <a
                            className={`dropdown-item ${
                              child.id === currentPage?.id ? "active" : ""
                            }`}
                            href={`#${child.slug}`}
                          >
                            {child.navLabel || child.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={page.id} className="nav-item">
                  <a
                    className={`nav-link ${
                      page.id === currentPage?.id ? "active" : ""
                    }`}
                    href={page.isHome ? "#" : `#${page.slug}`}
                  >
                    {page.navLabel || page.title}
                  </a>
                </li>
              );
            })}

            {customNavItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  className="nav-link"
                  href={item.url}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation1JsxElement;
