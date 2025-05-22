
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'mountain-dark': '#393939',
        'mountain-light': '#e8e8e6',
        'mountain-green': '#4D5C4A',
        'mountain-accent': '#788878',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
      }
    },
  },
  plugins: [],
};

export default config;
