import { useState } from 'react';
import './NavigationBuilder.css';

const NavigationBuilder = ({ pages, globalSettings, setGlobalSettings }) => {
  const [showAddCustomLink, setShowAddCustomLink] = useState(false);
  const [newCustomLink, setNewCustomLink] = useState({
    label: '',
    url: '',
    external: false
  });

  const handleAddCustomLink = () => {
    if (!newCustomLink.label.trim() || !newCustomLink.url.trim()) return;

    const customNavItems = globalSettings.customNavItems || [];
    const newItem = {
      id: Date.now().toString(),
      label: newCustomLink.label,
      url: newCustomLink.url,
      external: newCustomLink.external
    };

    setGlobalSettings(prev => ({
      ...prev,
      customNavItems: [...customNavItems, newItem]
    }));

    setNewCustomLink({ label: '', url: '', external: false });
    setShowAddCustomLink(false);
  };

  const handleRemoveCustomLink = (itemId) => {
    const customNavItems = globalSettings.customNavItems || [];
    setGlobalSettings(prev => ({
      ...prev,
      customNavItems: customNavItems.filter(item => item.id !== itemId)
    }));
  };

  const handleTogglePageInNav = (pageId) => {
    const hiddenPages = globalSettings.hiddenFromNav || [];
    const isHidden = hiddenPages.includes(pageId);
    
    if (isHidden) {
      setGlobalSettings(prev => ({
        ...prev,
        hiddenFromNav: hiddenPages.filter(id => id !== pageId)
      }));
    } else {
      setGlobalSettings(prev => ({
        ...prev,
        hiddenFromNav: [...hiddenPages, pageId]
      }));
    }
  };

  const hiddenPages = globalSettings.hiddenFromNav || [];
  const customNavItems = globalSettings.customNavItems || [];

  return (
    <div className="navigation-builder">
      <h5 className="mb-3">
        <span style={{ marginRight: 8, fontSize: 18 }}>🧭</span>
        Navigation Settings
      </h5>

      <div className="section mb-4">
        <h6 className="section-title">Page Navigation</h6>
        <p className="text-muted small mb-2">
          Control which pages appear in your site navigation
        </p>
        
        {pages.map(page => (
          <div key={page.id} className="nav-item-control">
            <div className="nav-item-info">
              <div className="nav-item-label">
                {page.navLabel || page.title}
                {page.isHome && <span className="home-badge">HOME</span>}
              </div>
              <div className="nav-item-url">/{page.slug}</div>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id={`nav-${page.id}`}
                checked={!hiddenPages.includes(page.id)}
                onChange={() => handleTogglePageInNav(page.id)}
              />
              <label className="form-check-label" htmlFor={`nav-${page.id}`}>
                Show in navigation
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="section-title mb-0">Custom Navigation Links</h6>
          <button 
            className="btn btn-sm btn-outline-primary"
            onClick={() => setShowAddCustomLink(true)}
          >
            + Add Link
          </button>
        </div>
        <p className="text-muted small mb-3">
          Add external links or custom navigation items
        </p>

        {showAddCustomLink && (
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Link Label"
                    value={newCustomLink.label}
                    onChange={(e) => setNewCustomLink(prev => ({
                      ...prev,
                      label: e.target.value
                    }))}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="URL (e.g., https://example.com or /contact)"
                    value={newCustomLink.url}
                    onChange={(e) => setNewCustomLink(prev => ({
                      ...prev,
                      url: e.target.value
                    }))}
                  />
                </div>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="external-link"
                  checked={newCustomLink.external}
                  onChange={(e) => setNewCustomLink(prev => ({
                    ...prev,
                    external: e.target.checked
                  }))}
                />
                <label className="form-check-label" htmlFor="external-link">
                  External link (opens in new tab)
                </label>
              </div>
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-success btn-sm"
                  onClick={handleAddCustomLink}
                  disabled={!newCustomLink.label.trim() || !newCustomLink.url.trim()}
                >
                  Add Link
                </button>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setShowAddCustomLink(false);
                    setNewCustomLink({ label: '', url: '', external: false });
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {customNavItems.length > 0 && (
          <div className="custom-links-list">
            {customNavItems.map(item => (
              <div key={item.id} className="custom-link-item">
                <div className="custom-link-info">
                  <div className="custom-link-label">
                    {item.label}
                    {item.external && <span className="external-badge">EXTERNAL</span>}
                  </div>
                  <div className="custom-link-url">{item.url}</div>
                </div>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleRemoveCustomLink(item.id)}
                  title="Remove link"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}

        {customNavItems.length === 0 && !showAddCustomLink && (
          <div className="text-muted text-center py-3">
            No custom navigation links added yet
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBuilder;
