module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  rules: {
    // Disable adding function-url-quotes
    "function-url-quotes": null,

    // Allow Tailwind's @apply
    "at-rule-no-deprecated": null,

    // Enforce long hex codes like #ffffff instead of #fff
    "color-hex-length": "long",
  },
};
