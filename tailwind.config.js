/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d8f712",
        secondary: "#1f2025",
        accent: "#2b2b34",
      },
      fontFamily: {
        matemasie: ["Matemasie", "sans-serif"],
      },
    },
  },
  plugins: [],
};
