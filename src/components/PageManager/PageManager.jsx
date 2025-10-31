import { useState } from "react";
import "./PageManager.css";

const PageManager = ({ pages, setPages, currentPageId, setCurrentPageId }) => {
  const [showAddPage, setShowAddPage] = useState(false);
  const [newPageData, setNewPageData] = useState({
    title: "",
    slug: "",
    isDropdown: false,
    parentId: null,
    dropdownHasOwnPage: false,
  });

  const defaultPageSettings = {
    lang: "en",
    bodyBgColor: "#f8fafc",
    bodyTextColor: "#222222",
    headingColor: "#222222",
    heroGradient1: "#168295",
    heroGradient2: "#0b5e3a",
    footerBgColor: "#0d0d0d",
    linkColor: "#2563eb",
    headerBgColor: "#ffffff",
  };

  const handleDeleteDropdown = (pageId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this dropdown and all its child pages?",
      )
    ) {
      // Find all child pages of this dropdown
      const childPages = pages.filter((page) => page.parentId === pageId);

      // Get all page IDs to delete (dropdown parent + all children)
      const pagesToDelete = [pageId, ...childPages.map((child) => child.id)];

      // Filter out all pages to be deleted
      const remainingPages = pages.filter(
        (page) => !pagesToDelete.includes(page.id),
      );

      // Check if we're deleting the current page
      if (pagesToDelete.includes(currentPageId)) {
        // Set current page to the first remaining page
        setCurrentPageId(remainingPages[0]?.id);
      }

      setPages(remainingPages);
    }
  };

  const handleAddPage = () => {
    if (!newPageData.title.trim() || !newPageData.slug.trim()) return;

    const normalizedSlug = newPageData.slug
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-");

    // Check if a page with this slug already exists
    const slugExists = pages.some((page) => page.slug === normalizedSlug);
    if (slugExists) {
      alert(
        `A page with the slug "${normalizedSlug}" already exists. Please choose a different slug.`,
      );
      return;
    }

    // If creating a new dropdown
    if (newPageData.parentId === "new-dropdown") {
      // Only create the dropdown parent, no child page yet
      const dropdownParent = {
        id: Date.now().toString(),
        title: newPageData.dropdownTitle,
        slug: newPageData.dropdownHasOwnPage ? normalizedSlug : null,
        isDropdown: true,
        isDropdownParent: true,
        hasOwnPage: newPageData.dropdownHasOwnPage,
        children: [],
        formData: newPageData.dropdownHasOwnPage
          ? {
              title: newPageData.dropdownTitle,
              desc: "",
              h1: newPageData.dropdownTitle,
              mainContent: `<h2>${newPageData.dropdownTitle}</h2>\n<p>This is a dropdown menu parent page.</p>`,
              ...defaultPageSettings,
            }
          : null,
      };

      // Only add the dropdown parent
      setPages((prev) => [...prev, dropdownParent]);

      if (newPageData.dropdownHasOwnPage) {
        setCurrentPageId(dropdownParent.id);
      }
    }
    // If adding a page under an existing dropdown
    else if (newPageData.parentId) {
      // Create a child page under the existing dropdown
      const childPage = {
        id: Date.now().toString(),
        title: newPageData.title,
        slug: normalizedSlug,
        parentId: newPageData.parentId,
        isDropdown: false,
        formData: {
          title: newPageData.title,
          desc: "",
          h1: newPageData.title,
          mainContent: `<h2>Welcome to ${newPageData.title}</h2>\n<p>This is your new page content. Edit it as needed.</p>`,
          ...defaultPageSettings,
        },
      };

      setPages((prev) => [...prev, childPage]);
      setCurrentPageId(childPage.id);
    } else {
      // Regular page creation
      const newPage = {
        id: Date.now().toString(),
        title: newPageData.title,
        slug: normalizedSlug,
        parentId: newPageData.parentId,
        isHome: pages.length === 0,
        formData: {
          title: newPageData.title,
          desc: "",
          h1: newPageData.title,
          mainContent: `<h2>Welcome to ${newPageData.title}</h2>\n<p>This is your new page content. Edit it as needed.</p>`,
          ...defaultPageSettings,
        },
      };

      setPages((prev) => [...prev, newPage]);
      setCurrentPageId(newPage.id);
    }

    setNewPageData({
      title: "",
      slug: "",
      parentId: null,
      dropdownTitle: "",
      dropdownHasOwnPage: false,
    });
    setShowAddPage(false);
  };

  const handleDeletePage = (pageId) => {
    if (pages.length <= 1) {
      alert("You must have at least one page.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this page?")) {
      setPages((prev) => prev.filter((p) => p.id !== pageId));
      if (currentPageId === pageId) {
        const remainingPages = pages.filter((p) => p.id !== pageId);
        setCurrentPageId(remainingPages[0]?.id);
      }
    }
  };

  const handleSetHomePage = (pageId) => {
    setPages((prev) =>
      prev.map((page) => ({
        ...page,
        isHome: page.id === pageId,
      })),
    );
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim("-");
  };

  return (
    <div className="page-manager">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Pages ({pages.length})</h4>
        <button
          className=" add-page-button"
          onClick={() => setShowAddPage(true)}
        >
          + Add Page
        </button>
      </div>

      {showAddPage && (
        <div className="card mb-3">
          <div className="card-body">
            <h6 className="card-title">Add New Page</h6>
            <div className="mb-2">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Page Title"
                value={newPageData.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setNewPageData((prev) => ({
                    ...prev,
                    title,
                    slug: generateSlug(title),
                  }));
                }}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="URL Slug (e.g., about-us)"
                value={newPageData.slug}
                onChange={(e) =>
                  setNewPageData((prev) => ({
                    ...prev,
                    slug: e.target.value
                      .toLowerCase()
                      .replace(/[^a-z0-9-]/g, "-"),
                  }))
                }
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select form-select-sm"
                value={newPageData.parentId || ""}
                onChange={(e) =>
                  setNewPageData((prev) => ({
                    ...prev,
                    parentId: e.target.value || null,
                  }))
                }
              >
                <option value="">Main Navigation Item</option>
                <option value="new-dropdown">+ Create New Dropdown</option>
                {pages
                  .filter((p) => p.isDropdown)
                  .map((page) => (
                    <option key={page.id} value={page.id}>
                      Under "{page.title}" dropdown
                    </option>
                  ))}
              </select>
            </div>

            {newPageData.parentId === "new-dropdown" && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Dropdown Menu Title (e.g., Services)"
                  value={newPageData.dropdownTitle || ""}
                  onChange={(e) =>
                    setNewPageData((prev) => ({
                      ...prev,
                      dropdownTitle: e.target.value,
                    }))
                  }
                />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="dropdownHasOwnPage"
                    checked={newPageData.dropdownHasOwnPage}
                    onChange={(e) =>
                      setNewPageData((prev) => ({
                        ...prev,
                        dropdownHasOwnPage: e.target.checked,
                      }))
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="dropdownHasOwnPage"
                  >
                    Dropdown menu should also be a clickable link to its own
                    page
                  </label>
                </div>

                <small className="text-muted">
                  {newPageData.dropdownHasOwnPage
                    ? "The dropdown title will be clickable and lead to its own page, plus show dropdown items on hover."
                    : "The dropdown title will only show dropdown items on hover, not be a clickable link."}
                </small>
              </div>
            )}

            {newPageData.parentId &&
              newPageData.parentId !== "new-dropdown" && (
                <small className="text-muted">
                  This page will appear as an item in the selected dropdown
                  menu.
                </small>
              )}
            <div className="d-flex gap-2">
              <button
                className="btn btn-success btn-sm"
                onClick={handleAddPage}
                disabled={
                  newPageData.parentId === "new-dropdown"
                    ? !newPageData.dropdownTitle?.trim()
                    : !newPageData.title.trim() || !newPageData.slug.trim()
                }
              >
                {newPageData.parentId === "new-dropdown"
                  ? "Create Dropdown"
                  : "Add Page"}
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setShowAddPage(false);
                  setNewPageData({
                    title: "",
                    slug: "",
                    parentId: null,
                    dropdownTitle: "",
                    dropdownHasOwnPage: false,
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pages-list">
        {pages.map((page) => (
          <div
            key={page.id}
            className={`page-item ${
              page.id === currentPageId ? "active" : ""
            } ${page.parentId ? "child-page" : ""}`}
            onClick={() => {
              if (page.formData) {
                setCurrentPageId(page.id);
              }
            }}
          >
            <div className="page-info">
              <div className="page-title">
                {page.parentId && <span className="child-indicator">└─ </span>}
                {page.title}
                {page.isHome && <span className="home-badge">HOME</span>}
                {page.isDropdownParent && (
                  <span className="dropdown-badge">DROPDOWN</span>
                )}
              </div>
              <div className="page-slug">{`/${page.slug}`}</div>
            </div>
            <div className="page-actions">
              {!page.isDropdownParent && (
                <>
                  {!page.isHome && (
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSetHomePage(page.id);
                      }}
                      title="Set as home page"
                    >
                      🏠
                    </button>
                  )}

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeletePage(page.id);
                    }}
                    title="Delete page"
                  >
                    🗑️
                  </button>
                </>
              )}

              {page.isDropdownParent && (
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteDropdown(page.id);
                  }}
                  title="Delete dropdown and all child pages"
                >
                  🗑️
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageManager;
