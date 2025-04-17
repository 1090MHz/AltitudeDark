export default {
  plugins: {
    "@tailwindcss/postcss": {}, // Tailwind processing
    // autoprefixer: {}, // Adds vendor prefixes - included in tailwindcss/postcss
    cssnano: {}, // Minifies CSS
  },
};