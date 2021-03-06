module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sourcecode: ['Source Code Pro'],
      },
      scale: {
        102: '1.015',
      },
      height: {
        99: '90%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
