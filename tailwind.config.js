/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0b0d17',
        secondary:'#d0d6f9',
        tetiary:'rgba(11, 13, 23, 1)'
      },
      fontFamily:{
        belleFair:['var(--font-bellefair)', 'serif'],
        barlow:['var(--font-barlow)','sans-serif']
      }
    },
  },
  plugins: [],
}
