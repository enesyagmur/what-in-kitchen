const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite projenizdeki dosyaları kapsar
  ],
  theme: {
    extend: {
      colors: {
        cream_custom: "#DCE9E2",
        brown_custom: "#D79B6B",
        green_custom: "#538061",
        red_custom: "#D96452",
      },
      animation: {
        moveTopAnimate: "moveTopAnimate 1s ease forwards",
      },
      keyframes: {
        moveTopAnimate: {
          "100%": { transform: "translateY(-73vh)" },
        },
      },
    },
  },
  plugins: [],
};
