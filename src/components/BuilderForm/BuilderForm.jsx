import { useState } from 'react';
import './BuilderForm.css';

function BuilderForm({ formData, setFormData, globalSettings, setGlobalSettings, currentPage }) {
  const [activeTab, setActiveTab] = useState('page');

  const handleGlobalChange = (field, value) => {
    setGlobalSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePageChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (field, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (field === 'logo') {
          handleGlobalChange('logo', e.target.result);
        } else if (field === 'favicon') {
          handleGlobalChange('favicon', e.target.result);
          handleGlobalChange('faviconName', file.name);
        } else if (field === 'heroBg') {
          handleGlobalChange('heroBg', e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="builder-form">
      <div className="form-tabs">
        <button 
          className={`tab-btn ${activeTab === 'page' ? 'active' : ''}`}
          onClick={() => setActiveTab('page')}
        >
          Page Content
        </button>
        <button 
          className={`tab-btn ${activeTab === 'global' ? 'active' : ''}`}
          onClick={() => setActiveTab('global')}
        >
          Global Settings
        </button>
        <button 
          className={`tab-btn ${activeTab === 'style' ? 'active' : ''}`}
          onClick={() => setActiveTab('style')}
        >
          Styling
        </button>
      </div>

      {activeTab === 'page' && (
        <div className="tab-content">
          <h3>{currentPage?.title || 'Page'} Content</h3>
          
          <div className="form-group">
            <label>Page Title (SEO)</label>
            <input
              type="text"
              className="form-control"
              value={formData.title || ''}
              onChange={(e) => handlePageChange('title', e.target.value)}
              placeholder="Page title for browser tab and SEO"
            />
          </div>

          <div className="form-group">
            <label>Meta Description</label>
            <textarea
              className="form-control"
              rows="2"
              value={formData.desc || ''}
              onChange={(e) => handlePageChange('desc', e.target.value)}
              placeholder="Brief description for search engines"
            />
          </div>

          <div className="form-group">
            <label>Hero Heading (H1)</label>
            <input
              type="text"
              className="form-control"
              value={formData.h1 || ''}
              onChange={(e) => handlePageChange('h1', e.target.value)}
              placeholder="Main heading that visitors see first"
            />
          </div>

          <div className="form-group">
            <label>Hero Subtext</label>
            <textarea
              className="form-control"
              rows="3"
              value={formData.afterH1 || ''}
              onChange={(e) => handlePageChange('afterH1', e.target.value)}
              placeholder="Text that appears below the main heading"
            />
          </div>



          <div className="form-group">
            <label>Main Content</label>
            <textarea
              className="form-control"
              rows="12"
              value={formData.mainContent || ''}
              onChange={(e) => handlePageChange('mainContent', e.target.value)}
              placeholder="HTML content for this page (use <h2> for sections, <p> for paragraphs)"
            />
            <small className="form-text text-muted">
              Use HTML tags like &lt;h2&gt;Section Title&lt;/h2&gt; and &lt;p&gt;Paragraph text&lt;/p&gt;
            </small>
          </div>
        </div>
      )}

      {activeTab === 'global' && (
        <div className="tab-content">
          <h3>Global Settings</h3>
          
          <div className="form-group">
            <label>Website Domain</label>
            <input
              type="text"
              className="form-control"
              value={globalSettings.domain || ''}
              onChange={(e) => handleGlobalChange('domain', e.target.value)}
              placeholder="yourdomain.com"
            />
          </div>

          <div className="form-group">
            <label>Website Language</label>
            <input
              type="text"
              className="form-control"
              value={globalSettings.lang || 'en'}
              onChange={(e) => handleGlobalChange('lang', e.target.value)}
              placeholder="Language code (e.g., en, es, fr, de, etc.)"
            />
            <small className="form-text text-muted">
              Enter the language code for your website (e.g., en for English, es for Spanish, fr for French)
            </small>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={globalSettings.sidebar || false}
                onChange={(e) => handleGlobalChange('sidebar', e.target.checked)}
                id="sidebarCheckbox"
              />
              <label className="form-check-label " htmlFor="sidebarCheckbox">
                Enable Sidebar
              </label>
            </div>
            <small className="form-text text-muted">
              Check to display a sidebar on all pages. Default is off.
            </small>
          </div>

          <div className="form-group">
            <label>Logo</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFileUpload('logo', e.target.files[0])}
            />
            {globalSettings.logo && (
              <div className="file-preview">
                <img src={globalSettings.logo} alt="Logo" style={{maxWidth: '180px', maxHeight: '90px'}} />
                <button 
                  type="button" 
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => handleGlobalChange('logo', '')}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Favicon</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFileUpload('favicon', e.target.files[0])}
            />
            {globalSettings.favicon && (
              <div className="file-preview">
                <img src={globalSettings.favicon} alt="Favicon" style={{maxWidth: '48px', maxHeight: '48px'}} />
                <span className="ms-2">{globalSettings.faviconName}</span>
                <button 
                  type="button" 
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => {
                    handleGlobalChange('favicon', '');
                    handleGlobalChange('faviconName', '');
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={globalSettings.stickyNavbar || false}
                onChange={(e) => handleGlobalChange('stickyNavbar', e.target.checked)}
              />
              <label className="form-check-label">
                Sticky Navigation Bar
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Hero Background Image (All Pages)</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFileUpload('heroBg', e.target.files[0])}
            />
            {globalSettings.heroBg && (
              <div className="file-preview">
                <img src={globalSettings.heroBg} alt="Hero background" style={{maxWidth: '180px', maxHeight: '110px'}} />
                <button 
                  type="button" 
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => handleGlobalChange('heroBg', '')}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'style' && (
        <div className="tab-content">
          <h3>Global Styling</h3>
          <p className="text-muted">These styles apply to all pages</p>
          
          <div className="form-group">
            <label>Font Family</label>
            <select
              className="form-control"
              value={globalSettings.fontFamily || 'system'}
              onChange={(e) => handleGlobalChange('fontFamily', e.target.value)}
            >
              <option value="system">System Default</option>
              <option value="Arial">Arial</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Verdana">Verdana</option>
            </select>
          </div>
          <div className="colors">
          <h4 className='d-block w-100'>Colors:</h4>
          <div className="form-group">
            <label>Body Background Color</label>
            <input
              type="color"
              className="form-control"
              value={globalSettings.bodyBgColor || '#f8fafc'}
              onChange={(e) => handleGlobalChange('bodyBgColor', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Body Text Color</label>
            <input
              type="color"
              className="form-control"
              value={globalSettings.bodyTextColor || '#222222'}
              onChange={(e) => handleGlobalChange('bodyTextColor', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Heading Color(h2)</label>
            <input
              type="color"
              className="form-control"
              value={globalSettings.headingColor || '#222222'}
              onChange={(e) => handleGlobalChange('headingColor', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Link Color</label>
            <input
              type="color"
              className="form-control"
              value={globalSettings.linkColor || '#2563eb'}
              onChange={(e) => handleGlobalChange('linkColor', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Header Background Color</label>
            <input
              type="color"
              className="form-control"
              value={globalSettings.headerBgColor || '#ffffff'}
              onChange={(e) => handleGlobalChange('headerBgColor', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Hero Gradient Color 1</label>
            <input
              type="color"
              className="form-control"
              value={globalSettings.heroGradient1 || '#667eea'}
              onChange={(e) => handleGlobalChange('heroGradient1', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Hero Gradient Color 2</label>
            <input
              type="color"
              className="form-control"
              value={globalSettings.heroGradient2 || '#764ba2'}
              onChange={(e) => handleGlobalChange('heroGradient2', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Footer Background Color</label>
            <input
              type="color"
              className="form-control"
              value={globalSettings.footerBgColor || '#0d0d0d'}
              onChange={(e) => handleGlobalChange('footerBgColor', e.target.value)}
            />
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuilderForm;
