/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'center': '0 0 10px 8px rgba(0, 0, 0, 0.03)', 
      },
      screens: {
        'max-sm': { 'max': '640px' },
        'max-lg': { 'max': '1150px' },
        'max-md': { 'max': '800px' },
      },

    },
  },
  plugins: [],
}

