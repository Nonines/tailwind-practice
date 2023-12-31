/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./assets/**/*.{html,js}", "./index.html"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "header-texture": "url('/assets/images/top_bg.png')",
        "hamburger-svg": "url('/assets/svg/hamburger.svg')",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      transitionProperty: {
        height: "height",
        "max-height": "max-height",
        spacing: "margin, padding",
      },
      colors: {
        grayish: "#f0eff5",
      },
    },
  },
  plugins: [],
};
