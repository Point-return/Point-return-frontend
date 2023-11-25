module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-debugger': 'off',
    'no-console': 0,
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'React',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-curly-brace-presence': [
      2,
      {
        props: 'never',
        children: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
