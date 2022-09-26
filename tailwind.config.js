const nativewind = require('nativewind/tailwind/native');
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', 'App.tsx'],
  theme: {
    extend: {
      colors: {
        black: '#252323',
        green: '#702ec2',
        purple: '#1DB954',
        white: '#ffffff',
        red: '#ed254e',
      },
    },
  },
  plugins: [nativewind()],
};
