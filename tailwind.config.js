/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    extend: {
      colors: {
        black: "var( --black)",
        blue: "var(--blue)",
        green: "var(--green)",
        purple: "var(--purple)",
        red: "var(--red)",
        yellow: "var(--yellow)",
        white: "var(--white)",
      },
      screens: {
        "3xl": "1750px",
      },
      fontFamily: {},
      transitionProperty: {},
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
