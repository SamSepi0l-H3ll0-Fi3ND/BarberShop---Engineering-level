/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-red': '#CC1E1E',
        'main-dark': '#101017',
        'main-gray':'#313131',
      },
    },
  },
  plugins: [require("daisyui")],
};
