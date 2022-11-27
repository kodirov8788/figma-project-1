/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', serif",
        roboto: "'Roboto', sans-serif",
        sans: "Segoe UI, sans-serif"
      },
      colors: {
        primary_yellow: '#FCC647',
        bg_color_first: '#FFFBF3',
        primary_text: '#F4B41B'
      },
    },
  },
  plugins: [],
}