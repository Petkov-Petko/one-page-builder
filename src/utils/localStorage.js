const STORAGE_KEYS = {
  PAGES: "websiteBuilder_pages",
  GLOBAL_SETTINGS: "websiteBuilder_globalSettings",
  CURRENT_PAGE_ID: "websiteBuilder_currentPageId",
  STORED_IMAGES: "one-page-builder-stored-images", 
};

export const storage = {
  // Save data to localStorage
  save: (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  },

  // Load data from localStorage
  load: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      return defaultValue;
    }
  },

  // Remove data from localStorage
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  },

  // Clear all builder data
  clearAll: () => {
    Object.values(STORAGE_KEYS).forEach((key) => {
      storage.remove(key);
    });
  },
};

export { STORAGE_KEYS };
