/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/components/**/*.{js,jsx}', './src/pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', ...fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
