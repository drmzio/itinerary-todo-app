import colors from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans', ...fontFamily.sans],
    },
    extend: {
      colors: {
        gray: colors.neutral,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
