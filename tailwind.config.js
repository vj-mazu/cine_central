/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0a0a0a',
        'brand-gold': '#c9a050',
        'brand-cream': '#f5f5f5',
        'brand-bg': '#f8f9fa',
        'brand-dark': '#111111',
      },
      fontFamily: {
        'serif-italic': ['"Instrument Serif"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
