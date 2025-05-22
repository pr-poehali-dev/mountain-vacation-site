
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'farm-cream': '#f9f6f1',
        'farm-green': '#7b8b69',
        'farm-dark-green': '#5c6851',
        'farm-brown': '#6b5c4c',
        'farm-light-brown': '#a99e8c',
        'farm-black': '#2a2a2a',
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'dancing': ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'farm-pattern': "url('/img/farm-pattern.png')",
      },
    },
  },
  plugins: [],
};

export default config;
