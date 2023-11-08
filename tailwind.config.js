/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1000px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--inter)", ...fontFamily.sans],
        robotoMono: ["var(--roboto-mono)", fontFamily.sans],
      },
    },
  },
};
