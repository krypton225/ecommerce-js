/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
    extend: {
      colors: {
        "slate-750": "#111721",
        "slate-850": "#19212e",
      }
    },
  },
  plugins: [],
}