module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'index.html',
    'src/js/*.js'
  ],
  theme: {
    extend: {
      colors: {
        accent: "#14CFAE",
        lightAccent: "#16E0BD",
        mdBlack: "#282828"
      },
      fontFamily: {
        primary: ['Source Sans Pro'],
        secondary: ['Source Code Pro']
      }
    },
  },
  variants: {},
  plugins: [],
}
