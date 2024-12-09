/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'success' : {
        300: '#86efac',
        700: '#15803d',
        800: '#166534',
      },

      'primary' : {
        300: '#93c5fd',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
      },
      'purple': {
        300: '#d8b4fe',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8'
      },
      'red': {
        300: '#fca5a5',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
      },

      'sky': {
        300: '#7dd3fc',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
      },

      'white': '#f8fafc',
      'gray50': '#f9fafb',
      'gray100': '#f3f4f6',
      'gray300': '#d1d5db',
      'gray500': '#6b7280',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

