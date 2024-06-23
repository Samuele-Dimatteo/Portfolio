import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0B0B0B',
        'secondary': '#C7C7C7',
      },
    },
  },
  plugins: [],
};

export default config;
