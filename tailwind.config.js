/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "aboutImage2": "url('/src/Components/Assets/Group 37432.svg')",
        "chatBg": "url('/src/Components/Assets/trabajoequipoteam-4200837_1920 3.svg')",
      },
      colors: {
      
       
      },
      width: {
       
      },
      height: {
        

      },
    },
  },
  screens:{
    'sm':"320px",
    'md':"768px",
    'lg':"1024",
    'xl': '1280px',
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ],
}