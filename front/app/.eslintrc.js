module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
