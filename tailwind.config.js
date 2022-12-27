const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      "background-tema": "url('/assets/Tentang/asset_tema.png')",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Universal: ["Universal"],
        Times: ["Times"],
        Poppins: ["Poppins"],
        TransAmerica: ["Trans-America Bold"],
        inter: ["var(--font-inter)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-medium": "spin 4s linear infinite",
      },
      colors: {
        blastoutpurple: "#240724",
      },
    },
  },
  plugins: [],
};
