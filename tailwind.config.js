/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: colors.teal["400"],
        primary: colors.slate["400"],
        secondary: colors.slate["500"],
        tertiary: colors.slate["300"],
      },
      fontFamily: {
        inter: ["var(--inter)", ...fontFamily.sans],
        jetbrainsMono: ["var(--jetbrains-mono)", ...fontFamily.sans],
      },
    },
  },
};
