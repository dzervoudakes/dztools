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
    'airbnb',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'import',
    'jest',
    'jsx-a11y',
    'react-hooks',
    'testing-library',
    'prettier'
  ],
  root: true,
  rules: {
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
    'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],
    'no-undef': ERROR,
    'no-unused-vars': ERROR,
    'no-var': ERROR,
    'prefer-const': ERROR,
    'prefer-template': ERROR,
    quotes: [ERROR, 'single', { avoidEscape: true }],
    'require-await': ERROR,

    // import rules
    'import/dynamic-import-chunkname': ERROR,
    'import/extensions': [
      ERROR,
      'always',
      {
        js: 'never',
        jsx: 'never'
      }
    ],
    'import/no-dynamic-require': OFF,
    'import/no-import-module-exports': OFF,
    'import/no-unresolved': ERROR,
    'import/order': [
      ERROR,
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        },
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react']
      }
    ],

    // React rules
    'react/forbid-prop-types': ERROR,
    'react/function-component-definition': OFF,
    'react/jsx-closing-bracket-location': [ERROR, 'line-aligned'],
    'react/jsx-curly-brace-presence': [ERROR, 'never'],
    'react/jsx-curly-spacing': [ERROR, { when: 'never', children: true }],
    'react/jsx-filename-extension': ERROR,
    'react/jsx-props-no-spreading': OFF,
    'react/no-array-index-key': ERROR,
    'react/no-unused-prop-types': ERROR,
    'react/no-unused-state': ERROR,
    'react/prefer-stateless-function': ERROR,
    'react/require-default-props': OFF,
    'react/sort-comp': ERROR,
    'react/static-property-placement': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
