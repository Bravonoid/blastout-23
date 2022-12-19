/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
        Universal: ["Universal"],
        Times: ["Times"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      colors: {
        blastoutpurple: "#8338ED",
      },
    },
  },
  plugins: [],
};
