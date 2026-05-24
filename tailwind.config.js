/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ivory: '#f8f4ed',
        chalk: '#fffdf8',
        stone: '#d8d1c7',
        taupe: '#9d8f82',
        clay: '#b68f71',
        charcoal: '#262420',
        graphite: '#4b4944',
        wood: '#8d6e57',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(38, 36, 32, 0.12)',
      },
    },
  },
  plugins: [],
};
