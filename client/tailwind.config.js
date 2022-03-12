const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
