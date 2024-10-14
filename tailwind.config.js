/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#DE496E",
        purple: "#8572FF",
        gray: "F1F5F9",
      },
      fontFamily: {
        iblod: ["Inter-Bold"],
        isemibold: ["Inter-SemiBold"],
        iregular: ["Inter-Regular"],
        imedium: ["Inter-Medium"],
      },
    },
  },
  plugins: [],
};
