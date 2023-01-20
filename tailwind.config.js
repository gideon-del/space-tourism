/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'rgba(11, 13, 23,1)',
        secondary:'rgba(208, 214, 249, 1)',
        tetiary:'rgba(11, 13, 23, 1)',
        underline:'rgb(56, 59, 75)'
      },
      fontFamily:{
        belleFair:['var(--font-bellefair)', 'serif'],
        barlow:['var(--font-barlow)','sans-serif'],
        normalBarlw :['var(--font-normalBarlow)', 'serif']
      },
      fontSize:{
        200:'3.5rem',
        300:'1.75rem',
        700:'6.25rem'
      },
      lineHeight:{
        sm:'2rem',
        md:'2.1rem',
        lg:'10.74rem'
      },
      letterSpacing:{
        sm:'2.35px',
        md:'2.7px',
        lg:'4.75px'
      }
    },
  },
  plugins: [],
}
