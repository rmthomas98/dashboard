module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "main-background":
          'linear-gradient(#00000075, #00000075), url("./assets/images/bg.jpg")',
      },
      boxShadow: {
        "nav-shadow": "2px 0px 15px #8b5cf6",
        "notification-shadow": "0px 0px 10px #a855f7",
        "email-shadow": "0px 0px 10px #d946ef",
        "account-bar": "0px 0px 15px",
      },
      maxWidth: {
        "dashboard-container": "1400px",
      },
      height: {
        "fill-container": "calc(100% - 24px)",
      },
    },
    screens: {
      tablet: "1124px",
      xl: "1280px",
      sm: "640px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
