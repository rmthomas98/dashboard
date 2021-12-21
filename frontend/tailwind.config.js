module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'main-background': 'linear-gradient(#00000075, #00000075), url("./assets/images/bg.jpg")',
      },
      boxShadow: {
        'nav-shadow': '2px 0px 15px #22d3eed7',
        'notification-shadow': '0px 0px 10px #a855f7',
        'email-shadow': '0px 0px 10px #d946ef'
      },
      maxWidth: {
        'dashboard-container': '1600px'
      }
    }
  },
  plugins: [],
};
