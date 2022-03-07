const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  // eslint-disable-next-line global-require
  presets: [require('../../tailwind-workspace-preset')],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
