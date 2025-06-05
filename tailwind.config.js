/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#FFF0F5',
          200: '#FFD6E7',
          300: '#FFBDD9',
          400: '#FF93B9',
          500: '#FF7BAA',
          600: '#FF5C99',
          700: '#FF2E7E',
        },
        blue: {
          100: '#E6F5FF',
          200: '#CCEBFF',
          300: '#A3D9FF',
          400: '#73C7FF',
          500: '#40B5FF',
          600: '#0099FF',
        },
        yellow: {
          100: '#FFF9E6',
          200: '#FFF3CC',
          300: '#FFEC99',
          400: '#FFE066',
          500: '#FFDE7A',
          600: '#FFCD29',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};