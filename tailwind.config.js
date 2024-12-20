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
        'custom1':'0px 4px 10px 0px rgba(0, 0, 0, 0.4)'
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
        slideIn: {
          '0%': {transform: 'translateX(100px)'},
          '100%': { transform: 'translateX(0px)' },  
        },
        slideOut: {
          '0%': {transform: 'translateX(0)'},
          '100%': { transform: 'translateX(400px)' },  
        },
      },
      animation: {
        skeleton: 'skeleton 1s linear infinite alternate',
        flash: 'flash 300ms 1',
        animateSlideIn: 'slideIn 0.5s forwards',
        animateSlideOut: 'slideOut 0.5s forwards', 
      },
      screens : {
        '4xl' : '2000px'
      }
    },
  },
  plugins: [],
}