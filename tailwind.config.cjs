/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-background': '#FBFBFD',
      'light-primary-text': '#202023',
      'light-secondary-text': '#313134',
      'light-gray': '#424245',
      'light-elements': '#F0F2F4',
      'light-ref-icons': '#934E84',
      'dark-background': '#151F2C',
      'dark-primary-text': '#FDFDFD',
      'dark-secondary-text': '#C5CBD3',
      'dark-gray': '202023',
      'dark-elements': '#424B57',
      'dark-ref-icons': '#F2BE2D',
      'test': 'red'
    },
    fontFamily: {
      main: ['Source Sans Pro', 'sans-serif'],
      title: ['EB Garamond', 'serif']
    },
    extend: {},
  },
  plugins: [],
}