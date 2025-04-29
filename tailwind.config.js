/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#8899a6",
          200: "#38444d",
        },
        pink: "#F231A5",
        blue: {
          100: "#0a0c21",
          200: "#000010",
        },
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
