/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '540px',
        'md': '768px',
        'lg': '992px',
        'xl': '1140px',
        '2xl': '1320px'
      },
      colors: {
        primary: {
          '50': '#eef8ff',
          '100': '#e0f2ff',
          '200': '#c7e6fe',
          '300': '#a5d3fc',
          '400': '#81b7f8',
          '500': '#6399f1',
          '600': '#4575e6',
          '700': '#3861ca',
          '800': '#3052a3',
          '900': '#2e4981',
          '950': '#0f172a'
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-dark-mode')(), // Dark mode plugin if needed
    // Other plugins if required
  ],
};
