/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*html'],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: {
        //   DEFAULT: '1rem',
        //   sm: '0rem',
        // },
      },
      colors: {
        borderColor: 'rgb(47, 51, 54)',
        hoverColor: 'rgba(231, 233, 234, 0.1)',
        backgroundColor: 'rgb(32, 35, 39)',
        blueColor: 'rgb(29, 155, 240)',
        fontLight: 'rgb(113, 118, 123)',
      },
    },
  },
  plugins: [],
}
