/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: 'var(--color-primary)', 
        secondary: 'var(--color-secondary)',
        tertiary:'var(--color-tertiary)',
        sizesAndColors : 'var(--sizes-and-colors-bg)',
        sizesAndColorsText : 'var(--sizes-and-colors-text)',
      },
      boxShadow: {
        'custom': '0px 10px 20px 0px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
}