/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bddcff',
          300: '#85bfff',
          400: '#4d9fff',
          500: '#1a73e8',
          600: '#0052cc',
          700: '#0040a3',
          800: '#003380',
          900: '#002966'
        },
        accent: {
          50: '#fdf2ff',
          100: '#f6e5ff',
          200: '#eeccff',
          300: '#e299ff',
          400: '#d566ff',
          500: '#c933ff',
          600: '#b300e6',
          700: '#8c00b3',
          800: '#660080',
          900: '#40004d'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: [],
};