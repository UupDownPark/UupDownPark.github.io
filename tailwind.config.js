/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tenada: ["Tenada"],
        "noto-sans": ["Noto-Sans"],
      },
      backgroundImage: {
        developer: "url('assets/images/developer.jpg')",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fadein: "fadein 3s",
      },
    },
  },
  plugins: [],
};
