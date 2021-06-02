# @dztools/eslint-config-base

> Base ESLint configuration for JavaScript applications.

[![npm](https://img.shields.io/npm/v/@dztools/eslint-config-base.svg)](https://www.npmjs.com/package/@dztools/eslint-config-base)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/dzervoudakes/dztools/blob/main/LICENSE)

## Installation and Dependencies

To install the package:

```sh
[npm i -D || yarn add -D] @dztools/eslint-config-base
```

If peer dependencies are needed, run the following:

```sh
[npm i -D || yarn add -D] babel-eslint eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier
```

## Usage

In your local `eslintrc` config file:

```js
module.exports = {
  extends: ['@dztools/eslint-config-base']
};
```

## License

[MIT](https://github.com/dzervoudakes/dztools/blob/main/LICENSE)
