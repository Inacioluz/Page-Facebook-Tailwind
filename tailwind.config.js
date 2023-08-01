/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-facebook': '#1877F2',
        'gray-facebook' : '#F0f2f5',
        'green-facebook': '#36A420'
      },
      spacing: {
        '580': '580px',
        '380': '380px',
      },
    },
  },
  plugins: [],
}

