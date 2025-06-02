/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e7ff',
          200: '#bcd5ff',
          300: '#8bb9ff',
          400: '#5792ff',
          500: '#3370ff',
          600: '#0F52BA', // Main primary
          700: '#0c42a0',
          800: '#0f3989',
          900: '#11326f',
          950: '#0a1c42',
        },
        secondary: {
          50: '#edfcfc',
          100: '#d3f7f6',
          200: '#aeefee',
          300: '#77e2e2',
          400: '#40cece',
          500: '#20B2AA', // Main secondary
          600: '#158f8c',
          700: '#167272',
          800: '#185c5c',
          900: '#194d4d',
          950: '#082c2c',
        },
        accent: {
          50: '#fefbe8',
          100: '#fff8c2',
          200: '#ffee86',
          300: '#ffe14a',
          400: '#ffd01f',
          500: '#FFD700', // Main accent gold
          600: '#e6b800',
          700: '#bf8700',
          800: '#9c6700',
          900: '#7c4d00',
          950: '#432a00',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          700: '#b91c1c',
        },
        dark: {
          100: '#d5d5d5',
          200: '#aaaaaa',
          300: '#808080',
          400: '#555555',
          500: '#2b2b2b',
          600: '#212121',
          700: '#1a1a1a',
          800: '#121212',
          900: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom',
          },
        },
      },
    },
  },
  plugins: [],
};