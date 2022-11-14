/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      backgroundImage: {
        home: "url('./background.png')",
      },
      colors: {
        'yellow-light': '#F1E9C9',
        'yellow-medium': '#DBAC2C',
        'yellow-dark': '#C47F17',
        'purple-light': '#EBE5F9',
        'purple-medium': '#8047F8',
        'purple-dark': '#4B2995',
        current: 'currentColor',
      },
      width: {
        17: '4.25rem',
        18: '4.5rem',
      },
      fontFamily: {
        baloo: ["'Baloo 2'"],
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '6-4': '6fr 4fr',
      },
      screens: {
        sx: '480px',
      },
    },
  },
  plugins: [],
};
