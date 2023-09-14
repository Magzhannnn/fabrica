/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      start: "320px",
      mobile: "800px",
      tablet: "1366px",
      desktop: "1720px",
    },
  },
  plugins: [],
};
