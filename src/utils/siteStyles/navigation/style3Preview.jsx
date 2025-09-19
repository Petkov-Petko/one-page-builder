
export function Navigation3JsxElement({
  globalSettings,
  topLevelPages,
  childPages,
  currentPage,
  customNavItems,
}) {
  if (globalSettings?.navStyle !== "3") return null;

  return (
    <nav
      className={[
        "navbar",
        "navbar-expand-xl",
        "navbar-light",
        globalSettings?.stickyNavbar ? "sticky-top" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container flex-xl-column">
        <div className="d-flex w-100 justify-content-between align-items-center d-xl-block text-center">
          <a
            className="navbar-brand mx-xl-auto"
            href={globalSettings?.homeHref || "#"}
          >
            <img
              src={globalSettings?.logo || "https://placehold.co/220x50"}
              alt={globalSettings?.siteName || "Logo"}
              width={220}
              height={50}
            />
          </a>

          <button
            className="navbar-toggler d-xl-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse justify-content-center mt-lg-0 py-lg-0"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {topLevelPages.map((page) => {
              if (page.isDropdownParent) {
                const children = childPages.filter((c) => c.parentId === page.id);
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
                    href={
                      page.isHome
                        ? globalSettings?.homeHref || "#"
                        : `#${page.slug}`
                    }
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

export default Navigation3JsxElement;
