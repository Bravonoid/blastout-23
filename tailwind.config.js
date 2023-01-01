const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-tema": "url('/assets/Tentang/asset_tema.png')",
      },
      screens: {
        mobile: { MIN: "360px", max: "639px" },
      },
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
        blastoutpurple: "#8338ED",
        blastoutdarkpurple: "#0F0B36",
        blastoutwhite: "#F0F0F0",
        blastoutgold: "#FFBD0C",
        blastoutmustard: "#EE9125",
        blastoutpink: "#FF0070",
        blastoutdarkpink: "#B90051",
      },
      content: {
        quote: "url('../public/beranda/testimoni/quote.svg')",
      },
    },
  },
  plugins: [],
};
