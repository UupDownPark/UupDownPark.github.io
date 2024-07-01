/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'tenada':['Tenada'],
        'noto-sans':['Noto-Sans']
      },
  
     backgroundImage:{
        'developer':"url('assets/images/developer.jpg')"
      }
    },
    
  },
  plugins: [],
};
