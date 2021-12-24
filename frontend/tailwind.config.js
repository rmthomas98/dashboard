module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        radial: "radial-gradient(circle, #1a2049 0%, #13162f 100%)",
        main: "linear-gradient(#0c1222, #0c1222)",
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
      keyframes: {
        "marketing-animation": {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
        "credit-animation": {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
        "cash-animation": {
          "0%": { width: "0%" },
          "100%": { width: "25%" },
        },
        "june-animation": {
          "0%": { height: "0px" },
          "100%": { height: "64px" },
        },
        "july-animation": {
          "0%": { height: "0px" },
          "100%": { height: "80px" },
        },
        "aug-animation": {
          "0%": { height: "0px" },
          "100%": { height: "160px" },
        },
        "sep-animation": {
          "0%": { height: "0px" },
          "100%": { height: "144px" },
        },
        "oct-animation": {
          "0%": { height: "0px" },
          "100%": { height: "96px" },
        },
        "nov-animation": {
          "0%": { height: "0px" },
          "100%": { height: "112px" },
        },
        "dec-animation": {
          "0%": { height: "0px" },
          "100%": { height: "176px" },
        },
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "marketing-animation": "marketing-animation 1.5s forwards",
        "credit-animation": "credit-animation 1.5s forwards",
        "cash-animation": "cash-animation 1.5s forwards",
        "june-animation": "june-animation 1.5s forwards",
        "july-animation": "july-animation 1.5s forwards",
        "aug-animation": "aug-animation 1.5s forwards",
        "sep-animation": "sep-animation 1.5s forwards",
        "oct-animation": "oct-animation 1.5s forwards",
        "nov-animation": "nov-animation 1.5s forwards",
        "dec-animation": "dec-animation 1.5s forwards",
        appear: "appear .5s forwards 2s",
      },
      background: {
        main: "0c1222",
      },
    },
    screens: {
      tablet: "1124px",
      xl: "1280px",
      sm: "640px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
