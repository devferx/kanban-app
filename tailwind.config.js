/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#635FC7',
        purpleHover: '#A8A4FF',
        black: '#000112',
        veryDarkGrey: '#20212C',
        darkGrey: '#2B2C37',
        linesDark: '#3E3F4E',
        mediumGrey: '#828FA3',
        linesLight: '#E4EBFA',
        lightGrey: '#F4F7FD',
        white: '#fff',
        red: '#EA5555',
        redHover: '#FF9898',
      },
      fontFamily: {
        jakarta: ['var(--plus-jakarta-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
