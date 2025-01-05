/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0A0A0A", // Dark background
          secondary: "#FFFFFF", // White text
          accent: "#FF0000", // Red accent from logo
          gray: {
            dark: "#1A1A1A",
            DEFAULT: "#2A2A2A",
            light: "#3A3A3A",
          },
          pattern: "#333333", // Color for the floral pattern
        },
      },
      backgroundImage: {
        "floral-pattern": "url('/assets/floral-pattern.svg')",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
      keyframes: {
        shine: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shine: "shine 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
