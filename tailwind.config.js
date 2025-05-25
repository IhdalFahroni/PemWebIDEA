/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./html/**/*.html",
  ],
  theme: {
    extend: {
      colors : {
        'golden' : ['#FFC107'],
      },
      fontFamily: {
        'josefin' : ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

