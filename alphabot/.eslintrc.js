module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prefer-template': 'off',
    'consistent-return': 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }]
  },
};
