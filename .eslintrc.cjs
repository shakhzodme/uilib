module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
};
