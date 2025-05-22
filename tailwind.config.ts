
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mountain-dark': '#1a2632',
        'mountain-medium': '#3c4e5c',
        'mountain-light': '#a2aaad',
        'mountain-cream': '#eae7e0',
        'mountain-accent': '#a8b9a5',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        'info-pattern': "url('https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      },
    },
  },
  plugins: [],
};

export default config;
