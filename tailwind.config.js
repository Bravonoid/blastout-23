const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        Inter: ["Inter"],
        Universal: ["Universal"],
        Times: ["Times"],
        Poppins: ["Poppins"],
        TransAmerica: ["Trans-America Bold Italic"],
=======
        inter: ["var(--font-inter)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
>>>>>>> refs/remotes/origin/master
      },
      colors: {
        blastoutpurple: "#8338ED",
        blastoutdarkpurple: "#0F0B36",
        blastoutwhite: "#F0F0F0",
        blastoutgold: "#FFBD0C",
        blastoutmustard: "#EE9125"
      },
    },
  },
  plugins: [],
};
