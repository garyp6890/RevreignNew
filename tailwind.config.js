/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rev-brown': 'var(--rev-brown)',
        'rev-beige': 'var(--rev-beige)',
        'rev-orange': 'var(--rev-orange)',
        'rev-yellow': 'var(--rev-yellow)',
        'rev-dark': 'var(--rev-dark)',
        'rev-light': 'var(--rev-light)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};