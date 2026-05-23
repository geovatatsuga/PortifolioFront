/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './constants.ts',
    './components/**/*.{ts,tsx}',
    './engine/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        ivory: '#FDFCF8',
        obsidian: '#121212',
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
        },
        lavender: {
          50: '#f5f3ff',
          100: '#ede9fe',
        },
      },
    },
  },
  plugins: [],
};
