/** @type {import('tailwindcss').Config} */
// const { fontFamily } = require("tailwindcss/defaultTheme");
// const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./static/**/*.js"],
  theme: {
    extend: {
      colors: {
        "menu-bg": "#23282e", // Menu background color
        "menu-hover": "#1678b5", // Hover background color
        "menu-text": "#f8fafb", // Menu text color
        "link-blue": "#3794ff", // Hyperlink color
        "body-bg": "#000000", // Match X-Plane 12 background color
        "body-text": "#f8fafb", // Match X-Plane 12 text color
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Roboto font for menu items
        comic: ["Comic Neue", "Comic Sans MS", "Comic Sans", "cursive"], // Comic Neue for body
      },
    },
  },
  safelist: [
    "font-roboto",
    "font-comic",
    "menu-bg", // Menu background color
    "menu-hover", // Hover background color
    "menu-text", // Menu text color
    "link-blue", // Hyperlink color
    "body-bg", // Match X-Plane 12 background color
    "body-text", // Match X-Plane 12 text color
    "group-hover/menu-depth-0:block",
    "group-hover/menu-depth-1:block",
    "group-hover/menu-depth-2:block",
    "group-hover/menu-depth-3:block",
    "group-hover/menu-depth-4:block",
    // Although it is possible to use more than 4 levels of menu-depth, it is not recommended
  ],
  plugins: [require('@tailwindcss/typography')],
};
