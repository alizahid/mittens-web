module.exports = {
  plugins: [],
  purge: ['./**/*.tsx', './assets/global.scss'],
  theme: {
    extend: {
      colors: {
        primary: '#ff5058',
        secondary: '#5dc3c4'
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      },
      width: {
        screenshot: '20rem'
      }
    }
  },
  variants: {}
}
