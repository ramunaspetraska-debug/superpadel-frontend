/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#6EE7B7',
          secondary: '#22D3EE',
          accent: '#C084FC',
        },
        surface: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
      },
      boxShadow: {
        glow: '0 10px 40px rgba(34, 211, 238, 0.25)',
      },
    },
  },
  plugins: [],
};

