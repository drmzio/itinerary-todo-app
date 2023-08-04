import konstaConfig from 'konsta/config';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default konstaConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        'ios-light-surface': '#fff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
});
