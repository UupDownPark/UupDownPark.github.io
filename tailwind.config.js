/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'tenada':['Tenada']
      },
     backgroundImage:{
        'developer':"url('./assets/images/developer.jpg')"
      }
    },
    
  },
  plugins: [],
};
