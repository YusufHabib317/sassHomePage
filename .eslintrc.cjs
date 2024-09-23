module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended', 
  ],
  plugins: ['testing-library', 'jest', '@typescript-eslint'], 
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parser: '@typescript-eslint/parser', 
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020, 
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, 
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', 
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "@next/next/no-img-element": "off"
  },
};
