import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        900: '#1a202c',
      },
      // Add other colors if needed
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};

export default config;
