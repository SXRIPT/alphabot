module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier', 'plugin:security/recommended'],
  plugins: ['prettier', 'security'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
