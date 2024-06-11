export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-surface": "#FFFFFF",
        "secondary-surface": "#F2F5F7",
        "tertiary-surface": "#DCE3E8",
        "primary-text": "#1C2B36",
        "secondary-text": "#3E5463",
        "tertiary-text": "#9FB1BD",
        "primary-icon": "#1C2B36",
        "secondary-icon": "#3E5463",
        "minimal-border": "#DCE3E8",
        "moderate-border": "#C1CCD6",
        "bold-border": "#5B7282",
        "subtle-border": "#C1CCD6",
        "high-contrast-border": "#1C2B36",
        ui: {
          0: "#FFFFFF", // Primary Surface, Reversed Text & Icons
          100: "#F2F5F7", // Secondary Surface
          200: "#DCE3E8", // Tertiary Surface, Minimal Borders
          300: "#C1CCD6", // Subtle Borders
          400: "#9FB1BD", // Tertiary Text, Moderate Borders, Secondary Icons
          600: "#5B7282", // Bold Borders
          700: "#3E5463", // Secondary Text, Primary Icons
          800: "#2A3F4D", // Subtle Borders
          900: "#1C2B36", // Primary Text, High Contrast Borders
        },
        blue: {
          50: "#F0F4FA",
          100: "#D4E4FA",
          200: "#ADCCF7",
          300: "#75B1FF",
          400: "#3D8DF5",
          500: "#186ADE",
          600: "#0D4EA6",
          700: "#103A75",
          800: "#11294D",
          900: "#0D1826",
        },
        "primary-action": "#186ADE", // Primary Calls to Action, Important Information
        "primary-action-hover": "#1660C9",
        "primary-action-active": "#1457B4",
        "secondary-minimal-action-hover": "#F2F5F7",
        "secondary-minimal-action-active": "#DCE3E8",
        green: "#077D55", // Positive values, success, available
        success: "#077D55", // Positive values, success, available
        red: "#D91F11", // Negative value, error, critical alerts
        error: "#D91F11", // Negative value, error, critical alerts
        orange: "#E86427", // Warning, mild alert, accessible negative value
        yellow: "#F5C518", // Warning, mild alert
      },
    },
    fontFamily: {
      title: [
        "Basis",
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  /*
    *** tailwindcss-elevation ***
    elevation-0	Background
    elevation-1	Panels, Cards Minimal
    elevation-2	Panels, Cards Subtle
    elevation-4	Panels, Navigation Bars, Cards Bold
    elevation-5	Menus, Date Picker
    elevation-6	Modals
    --------------------------------
  */
  plugins: [require("tailwindcss-elevation")],
};
