/* eslint-disable prettier/prettier */
module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', {
    'endOfLine':'auto'
    }],
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    // eslint-disable-next-line quote-props
    'camelcase': 'off',
    // eslint-disable-next-line quote-props
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
  },
};
