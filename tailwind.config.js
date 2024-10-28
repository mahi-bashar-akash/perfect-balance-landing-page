/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        'top-to-bottom': {
          '0%': { transform: 'translateY(90px)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(90px)' },
        },
        'bottom-to-top': {
          '0%': { transform: 'translateY(-90px)' },
          '50%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-90px)' },
        },
      },
      animation: {
        'top-to-bottom': 'top-to-bottom 5s infinite',
        'bottom-to-top': 'bottom-to-top 5s infinite',
      },
    },
  },
  plugins: [],
}
