/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/index.html", "./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        blue: "#133C55",
        red: "#EC0000",
        white: "#FBFEF9",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        sans: ["Cormorant Garamond", "serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
