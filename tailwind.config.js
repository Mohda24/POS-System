/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content:{
        after:'" "'
      },
      colors: {
        primary: 'var(--color-primary)', 
        secondary: 'var(--color-secondary)',
        tertiary:'var(--color-tertiary)',
        sizesAndColors : 'var(--sizes-and-colors-bg)',
        sizesAndColorsText : 'var(--sizes-and-colors-text)',
      },
      boxShadow: {
        'custom': '0px 10px 20px 0px rgba(0, 0, 0, 0.02)',
        'custom1':'0px 4px 10px 0px rgba(0, 0, 0, 0.15)'

      },
      fontSize : {
        title : 'var(--title)'
      },
      keyframes: {
        'skeleton': {
          '0%': { backgroundColor: 'hsl(200, 20%, 70%)',opacity: '0.3' },
          '100%': { backgroundColor: 'hsl(200, 20%, 95%)',opacity: '0.3' },
        },
        'flash': {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        feedback: {
          '0%': { opacity: 0, right: '-300px' }, 
          '20%': { opacity: 1, right: '0' },
          '100%': { opacity: 1, right: '0' }    
        },
        feedbackreverse: {
          '0%': { opacity: 1, right: '0' },
          '20%': { opacity: 1, right: '20px' },
          '100%': { opacity: 0, right: '-300px' },
        },
        feedbacktime :{
          '0%': { width: '0' },
          '50%': { width: '50%' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        skeleton: 'skeleton 1s linear infinite alternate',
        flash: 'flash 300ms 1',
        feedback: 'feedback 4s ease-in-out',
        feedbackreverse: 'feedbackreverse 2s ease-in-out ', 
        feedbacktime: 'feedbacktime 4s linear forwards',
      },
    },
  },
  plugins: [],
}