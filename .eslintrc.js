module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  root: true,
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: [
          ['/^react$/', '/^next$/'],
          'module',
          ['/^@/ui/', '/^@/shared/', '/^@/styles/'],
          ['/^@/utils/', '/^@/constants/'],
          ['/^@/types/'],
          ['parent', 'sibling', 'index'],
        ],
        newlinesBetween: 'always',
      },
    ],
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'off',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
