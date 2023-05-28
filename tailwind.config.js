/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 0px 35px rgba(255, 255, 255, 40)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'translate': 'translate 3s linear infinite',
      }
    },
  },
  plugins: [],
}
