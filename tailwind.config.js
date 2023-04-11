module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-back': "url('./assets/shutterstock_1168732519.png')",
      }),
      height: {
        '4.5': '18px',
        '126': '28rem',
        '128': '30rem'
      },
      colors: {
        'twitter': '#2D9CDB',
        'youtube': '#EB5757',
        'facebook': '#2F80ED',
        'instagram': '#9B51E0',
        'page-color-1': '#fdfdfd',
        'page-color-2': '#f6f6f9',
        'footer-color': '#fcfcfc',
        'font-color': '#333', //dark-gray
        'gray-color': 'rgb(156 163 175)',
        'green-color': '#0EDF9B',
        'blue-color': '#176BFB'
      },
      fontFamily: {
        'sf-pro': ['SFProDisplay']
      }
    }
  },
  plugins: []
}