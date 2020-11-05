const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  plugins: ['import', 'prettier'],
  root: true,
  rules: {
    // TypeScript rules
    '@typescript-eslint/explicit-function-return-type': [
      ERROR,
      {
        allowExpressions: true
      }
    ],
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/no-use-before-define': ERROR,

    // standard rules
    'class-methods-use-this': OFF,
    'comma-dangle': [ERROR, 'never'],
    'comma-spacing': [ERROR, { before: false, after: true }],
    'consistent-return': OFF,
    curly: ERROR,
    'eol-last': [ERROR, 'always'],
    'linebreak-style': OFF,
    'no-console': WARN,
    'no-param-reassign': ERROR,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': OFF, // '@typescript-eslint' variant enabled above
    'no-undef': ERROR,
    'no-var': ERROR,
    'prefer-const': ERROR,
    'prefer-template': ERROR,
    quotes: [ERROR, 'single', { avoidEscape: true }],
    'require-await': ERROR,

    // import rules
    'import/extensions': [ERROR, 'always', { js: 'never' }],
    'import/no-dynamic-require': OFF,
    'import/no-unresolved': ERROR,
    'import/order': [
      ERROR,
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'never'
      }
    ]
  }
};
