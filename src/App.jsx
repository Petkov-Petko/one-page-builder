import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BuilderForm from "./components/BuilderForm/BuilderForm";
import Preview from "./components/Preview/Preview";
import PageManager from "./components/PageManager/PageManager";
import NavigationBuilder from "./components/NavigationBuilder/NavigationBuilder";
import { useState, useEffect } from "react";
import { storage, STORAGE_KEYS } from "./utils/localStorage";

function App() {
  // Initialize with a default home page
  const [pages, setPages] = useState(() => {
    const saved = storage.load(STORAGE_KEYS.PAGES);
    return (
      saved || [
        {
          id: "1",
          title: "Home",
          slug: "",
          isHome: true,
          formData: {
            title: "Welcome to Your Website",
            desc: "Your amazing website description",
            h1: "Welcome to Your Website",
            afterH1:
              "This is your beautiful new website. Start editing to make it your own!",
            mainContent: `<h2>Welcome to Your Website</h2>
<p>This is your new page content. Edit it as needed.</p>`,
          },
        },
      ]
    );
  });

  const [globalSettings, setGlobalSettings] = useState(() => {
    const saved = storage.load(STORAGE_KEYS.GLOBAL_SETTINGS);
    return (
      saved || {
        domain: "",
        logo: "",
        favicon: "",
        faviconName: "",
        hiddenFromNav: [],
        customNavItems: [],
        lang: "en",
        bodyBgColor: "#f8fafc",
        bodyTextColor: "#222222",
        headingColor: "#222222",
        heroGradient1: "#667eea",
        heroGradient2: "#764ba2",
        footerBgColor: "#0d0d0d",
        linkColor: "#2563eb",
        headerBgColor: "#ffffff",
        stickyNavbar: true,
        privacyOrTerms: "privacy",
        privacyOption: "1",
        termsOption: "1",
        navStyle: "1",
      }
    );
  });
  const [currentPageId, setCurrentPageId] = useState(() => {
    return storage.load(STORAGE_KEYS.CURRENT_PAGE_ID, "1");
  });
  // Auto-save effects
  useEffect(() => {
    storage.save(STORAGE_KEYS.PAGES, pages);
  }, [pages]);

  useEffect(() => {
    storage.save(STORAGE_KEYS.GLOBAL_SETTINGS, globalSettings);
  }, [globalSettings]);

  useEffect(() => {
    storage.save(STORAGE_KEYS.CURRENT_PAGE_ID, currentPageId);
  }, [currentPageId]);

  // Get current page data
  const currentPage = pages.find((page) => page.id === currentPageId);
  const currentFormData = currentPage?.formData || {};

  // Update current page's form data
  const setCurrentPageFormData = (newFormData) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === currentPageId
          ? {
              ...page,
              formData:
                typeof newFormData === "function"
                  ? newFormData(page.formData)
                  : newFormData,
            }
          : page
      )
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="builder-panel">
              <PageManager
                pages={pages}
                setPages={setPages}
                currentPageId={currentPageId}
                setCurrentPageId={setCurrentPageId}
              />

              <NavigationBuilder
                pages={pages}
                globalSettings={globalSettings}
                setGlobalSettings={setGlobalSettings}
              />

              <BuilderForm
                formData={currentFormData}
                setFormData={setCurrentPageFormData}
                globalSettings={globalSettings}
                setGlobalSettings={setGlobalSettings}
                currentPage={currentPage}
              />
            </div>
          </div>
          <div className="col-md-6">
            <Preview
              formData={currentFormData}
              globalSettings={globalSettings}
              pages={pages}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
