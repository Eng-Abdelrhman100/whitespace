/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main" : "#043873",
        "button" : "#4f9cf9",
        "button-hover" : "#3c8de6",
        "gold" : "#ffe492",
        "text" : "#212529",
        "text2" : "#043873",
        "image" : "#C4DEFD"
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens :{
        "mobile" : "320px",
        "tablet" : "769px",
        "minidesktop" : "1153px",
        "desktop" : "1920px"
      }
    },
  },
  plugins: [],
}