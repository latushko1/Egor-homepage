/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        primary: '#D1BC8A',
      },
    },


  },
  plugins: [],
}
