module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'titleShadow': 'inset 0px -2px #393241',

        'sectionShadow': 'inset -2px 0px #393241',
        'sectionShadow-active': '2px 0px #9089F0'
      }
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',

      'card': '#302938',
      'card-secondary': '#9089F0',

      'background': '#332D3B',
      'background-alt': '#383140',
      'placeholder': '#383140',

      'primary': '#CFC7D7',
      'secondary': '#9089F0',
      'inActive': '#747474',

      'notification': '#be123c',
      'notification-alt': '#15803d',

      'wrongInput': '#e11d48',

      'online-first': '#20BF55',
      'online-second': '#01BAEF'
    }
  },
  plugins: [],
}
