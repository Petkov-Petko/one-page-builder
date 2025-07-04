import { useState } from 'react';
import './PageManager.css';

const PageManager = ({ pages, setPages, currentPageId, setCurrentPageId }) => {
  const [showAddPage, setShowAddPage] = useState(false);
  const [newPageData, setNewPageData] = useState({
    title: '',
    slug: '',
    navLabel: ''
  });

  const handleAddPage = () => {
    if (!newPageData.title.trim() || !newPageData.slug.trim()) return;
    
    const newPage = {
      id: Date.now().toString(),
      title: newPageData.title,
      slug: newPageData.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      navLabel: newPageData.navLabel || newPageData.title,
      isHome: pages.length === 0,
      formData: {
        lang: "en",
        title: newPageData.title,
        desc: "",
        h1: newPageData.title,
        mainContent: `<h2>Welcome to ${newPageData.title}</h2>\n<p>This is your new page content. Edit it as needed.</p>`,
        bodyBgColor: "#f8fafc",
        bodyTextColor: "#222222",
        headingColor: "#222222",
        heroGradient1: "#667eea",
        heroGradient2: "#764ba2",
        footerBgColor: "#0d0d0d",
        linkColor: "#2563eb",
        headerBgColor: "#ffffff"
      }
    };

    setPages(prev => [...prev, newPage]);
    setCurrentPageId(newPage.id);
    setNewPageData({ title: '', slug: '', navLabel: '' });
    setShowAddPage(false);
  };

  const handleDeletePage = (pageId) => {
    if (pages.length <= 1) {
      alert("You must have at least one page.");
      return;
    }
    
    if (window.confirm("Are you sure you want to delete this page?")) {
      setPages(prev => prev.filter(p => p.id !== pageId));
      if (currentPageId === pageId) {
        const remainingPages = pages.filter(p => p.id !== pageId);
        setCurrentPageId(remainingPages[0]?.id);
      }
    }
  };

  const handleSetHomePage = (pageId) => {
    setPages(prev => prev.map(page => ({
      ...page,
      isHome: page.id === pageId
    })));
  };

  const generateSlug = (title) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  return (
    <div className="page-manager">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Pages ({pages.length})</h4>
        <button 
          className="btn btn-primary btn-sm"
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
                  setNewPageData(prev => ({
                    ...prev,
                    title,
                    slug: generateSlug(title)
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
                onChange={(e) => setNewPageData(prev => ({
                  ...prev,
                  slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-')
                }))}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Navigation Label (optional)"
                value={newPageData.navLabel}
                onChange={(e) => setNewPageData(prev => ({
                  ...prev,
                  navLabel: e.target.value
                }))}
              />
            </div>
            <div className="d-flex gap-2">
              <button 
                className="btn btn-success btn-sm"
                onClick={handleAddPage}
                disabled={!newPageData.title.trim() || !newPageData.slug.trim()}
              >
                Add Page
              </button>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setShowAddPage(false);
                  setNewPageData({ title: '', slug: '', navLabel: '' });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pages-list">
        {pages.map(page => (
          <div 
            key={page.id} 
            className={`page-item ${page.id === currentPageId ? 'active' : ''}`}
            onClick={() => setCurrentPageId(page.id)}
          >
            <div className="page-info">
              <div className="page-title">
                {page.title}
                {page.isHome && <span className="home-badge">HOME</span>}
              </div>
              <div className="page-slug">/{page.slug}</div>
            </div>
            <div className="page-actions">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageManager;
