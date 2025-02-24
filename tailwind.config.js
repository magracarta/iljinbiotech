/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { 'max': '640px' },
        'max-lg': { 'max': '1150px' },
        'max-md': { 'max': '800px' },
      },

    },
  },
  plugins: [],
}

