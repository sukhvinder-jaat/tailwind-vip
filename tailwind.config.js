/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // gilroyRegular: ["Gilroy-Regular"],
        // gilroyMedium: ["Gilroy-Medium"],
        // gilroyLight: ["Gilroy-Light"],
        // gilroyHeavy: ["Gilroy-Heavy"],
        // gilroyBold: ["Gilroy-Bold"],
        // KonexyPersonalUse: ["KonexyPersonalUse"],
        // inter: ["font-family: 'Inter', sans-serif"],
        Montserrat: ["font-family: 'Montserrat', sans-serif;"],
      },
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      md: "14px",
      lg: "15px",
      xl: "17px",
      "2xl": "19px",
      "3xl": "22px",
      "4xl": "27px",
      "5xl": "32px",
      "6xl": "37px",
      "7xl": "50px",
      "8xl": "58px",
    },
  },
  plugins: [],
};
