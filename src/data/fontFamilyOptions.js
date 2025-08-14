export const fontFamilyOptions = [
  { value: "system", label: "System Default" },

  // Web-Safe Sans-Serif Fonts (100% browser support)
  { value: "Arial, sans-serif", label: "Arial" },
  { value: "Helvetica, Arial, sans-serif", label: "Helvetica" },
  { value: "Verdana, Geneva, sans-serif", label: "Verdana" },
  { value: "Tahoma, Geneva, sans-serif", label: "Tahoma" },
  { value: "'Trebuchet MS', Helvetica, sans-serif", label: "Trebuchet MS" },
  { value: "'Arial Black', Gadget, sans-serif", label: "Arial Black" },
  { value: "Impact, Charcoal, sans-serif", label: "Impact" },
  {
    value: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
    label: "Lucida Sans",
  },

  // Web-Safe Serif Fonts (100% browser support)
  { value: "Georgia, serif", label: "Georgia" },
  { value: "'Times New Roman', Times, serif", label: "Times New Roman" },
  { value: "'Book Antiqua', Palatino, serif", label: "Book Antiqua" },
  { value: "Palatino, 'Palatino Linotype', serif", label: "Palatino" },
  { value: "Times, serif", label: "Times" },

  // Web-Safe Monospace Fonts (100% browser support)
  { value: "'Courier New', Courier, monospace", label: "Courier New" },
  { value: "'Lucida Console', Monaco, monospace", label: "Lucida Console" },
  { value: "Monaco, 'Menlo', monospace", label: "Monaco" },

  // Modern System Fonts (built into OS)
  {
    value:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    label: "System UI",
  },
  {
    value: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    label: "Segoe UI (Windows)",
  },
  {
    value: "-apple-system, 'SF Pro Display', sans-serif",
    label: "SF Pro (Apple)",
  },

  // Popular Google Fonts (with strong fallbacks)
  { value: "'Roboto', Arial, sans-serif", label: "Roboto" },
  { value: "'Open Sans', Arial, sans-serif", label: "Open Sans" },
  { value: "'Lato', Arial, sans-serif", label: "Lato" },
  { value: "'Montserrat', Arial, sans-serif", label: "Montserrat" },
  { value: "'Poppins', Arial, sans-serif", label: "Poppins" },
  { value: "'Inter', Arial, sans-serif", label: "Inter" },
];
