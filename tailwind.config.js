/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroyRegular: ["Gilroy-Regular"],
        gilroyMedium: ["Gilroy-Medium"],
        gilroyLight: ["Gilroy-Light"],
        gilroyHeavy: ["Gilroy-Heavy"],
        gilroyBold: ["Gilroy-Bold"],
        KonexyPersonalUse: ["KonexyPersonalUse"],
        inter: ["font-family: 'Inter', sans-serif"],
      },
    },
  },
  plugins: [],
};
