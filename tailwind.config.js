/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx, css}',
    './public/**/*.{js,ts,jsx,tsx,mdx, css, svg}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      colors: {
        'color1': '#DD4470',
        'color2': '#FE72A9',
        'color3' : '#FFC872',
        'color4' : '#FCE4BF',
        'color5' : '#faecd7',
      }
    },
  },
  darkMode: "class",
}