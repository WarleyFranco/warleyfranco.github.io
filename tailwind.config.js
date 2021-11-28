const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/pages/**/*.{ts, tsx}', './src/components/**/*.{ts, tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.black,
        blue: colors.indigo,
        current: 'currentColor',
        gray: colors.coolGray,
        green: colors.emerald,
        primary: colors.indigo,
        red: colors.red,
        transparent: 'transparent',
        white: colors.white,
        yellow: colors.amber,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
