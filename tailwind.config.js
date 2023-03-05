/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#000000",
      onyx: "#262626",
      white: "#ffffff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#F2AF1B",
      "yellow-dark": "#d9990c",
      "gray-dark": "#DCDBDB",
      gray: "#EBEBEB",
      "gray-darker": "#BCBCBC",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      screens: {
        "3xl": "1800px",
        "4xl": "2100px",
        "5xl": "2500px",
      },
    },
  },
  plugins: [],
};
