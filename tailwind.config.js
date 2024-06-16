/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:'#2997ff',
        gray:{
          DEFAULT:"#86868b",
          100:'#f7f7f7',
          200:'#f2f2f2',
          300:'#e3e3e3',
          400:'#b3b3b3',
          500:'#808080',
          600:'#666666',
          700:'#4d4d4d',
          800:'#333333',
          900:'#1a1a1a',
        },
        zinc:'#101010',
      }
    },
  },
  plugins: [],
}

