/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: '#E3F2FD',
          green: '#E8F5E9',
          red: '#FFEBEE',
          yellow: '#FFF8E1',
          purple: '#F3E5F5',
        },
        academic: {
          primary: '#1A237E',
          secondary: '#0D47A1',
        },
      },
    },
  },
  plugins: [],
};