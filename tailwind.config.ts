import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        black: '#030303',
        primary: '#5BCFC5',
        hover: '#48a79f',
        dark: '#4F7086',
        gray: {
          100: '#F6F6F6',
          200: '#f3f3f3',
          600: '#969BA0',
        },
        zinc: {
          100: '#4f4f4f',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
