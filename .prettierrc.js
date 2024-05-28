
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
  ],
  rules: {
    // reglas personalizadas
  },
};
