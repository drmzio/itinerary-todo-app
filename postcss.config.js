export default {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {},
    'postcss-focus-visible': {
      replaceWith: '[data-focus-visible-added]',
    },
    autoprefixer: {},
  },
};
