module.exports = {
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  extends: ["eslint:recommended"],
  plugins: ['@bratislava'],
  rules: {
    '@bratislava/eslint-plugin-no-raw-text-or-elements/no-html-elements': 'warn',
    '@bratislava/eslint-plugin-no-raw-text-or-elements/string-literal-wrapped-in-typography': 'warn'
  },
  ignorePatterns: ["*.html"],
};
