/** @type {import('tailwindcss').Config} */
// const { fontFamily } = require("tailwindcss/defaultTheme");
// const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./static/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  safelist: [
    "group-hover/menu-depth-0:block",
    "group-hover/menu-depth-1:block",
    "group-hover/menu-depth-2:block",
    "group-hover/menu-depth-3:block",
    "group-hover/menu-depth-4:block",
    // Although it is possible to use more than 4 levels of menu-depth, it is not recommended
  ],
  plugins: [require("@tailwindcss/typography")],
};
