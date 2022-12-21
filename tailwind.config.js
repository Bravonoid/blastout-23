const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ungu: "#0F0B36",
        putih: "#F0F0F0",
        emas: "#FFBD0C"
      },
    },
  },
  plugins: [],
};
