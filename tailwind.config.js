/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./html/**/*.html",
  ],
  theme: {
    extend: {
      colors : {
        'golden' : '#FFC107',
        'grayish' : '#8D6E63',
        'page-bg': '#fffaf2',
        'border-card': '#ccc',
      },
      fontFamily: {
        'josefin' : ['"Josefin Sans"', 'sans-serif'],
        'jaldi' : ['"Jaldi"', 'sans-serif'],
      },
      transitionProperty: {
        'bg-img': 'background-image',
      },
    },
  },
  plugins: [],
};

