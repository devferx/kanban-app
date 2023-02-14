/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['var(--plus-jakarta-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
