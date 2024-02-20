/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#007BFF",
        "primary-200": "#69a9ff",
        "primary-300": "#e0ffff",
        "accent-100": "#00BFFF",
        "accent-200": "#00619a",
        "text-100": "#333333",
        "text-200": "#5c5c5c",
        "bg-100": "#FFFFFF",
        "bg-200": "#f5f5f5",
        "bg-300": "#cccccc",
      },
    },
  },
  plugins: [],
};
