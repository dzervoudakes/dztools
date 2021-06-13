# @dztools/eslint-config-react-typescript

> ESLint configuration for React + TypeScript applications.

[![npm](https://img.shields.io/npm/v/@dztools/eslint-config-react-typescript.svg)](https://www.npmjs.com/package/@dztools/eslint-config-react-typescript)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/dzervoudakes/dztools/blob/main/LICENSE)

## Installation and Dependencies

To install the package:

```sh
[npm i -D || yarn add -D] @dztools/eslint-config-react-typescript
```

If peer dependencies are needed, run the following:

```sh
[npm i -D || yarn add -D] @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-testing-library prettier typescript
```

## Usage

In your local `eslintrc` config file:

```js
module.exports = {
  extends: ['@dztools/eslint-config-react-typescript']
};
```

## License

[MIT](https://github.com/dzervoudakes/dztools/blob/main/LICENSE)
