# @dztools/stylelint-config

> Base configuration for StyleLint runtime config.

[![npm](https://img.shields.io/npm/v/@dztools/stylelint-config.svg)](https://www.npmjs.com/package/@dztools/stylelint-config)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Installation and Dependencies

To install the package:

```
[npm i -D || yarn add -D] @dztools/stylelint-config
```

If peer dependencies are needed, run the following:

```
[npm i -D || yarn add -D] stylelint stylelint-config-prettier stylelint-config-standard stylelint-order stylelint-prettier
```

## Usage

In your local `stylelintrc` file:

```js
module.exports = {
  extends: ['@dztools/stylelint-config']
};
```

## License

https://github.com/dzervoudakes/dztools/blob/master/LICENSE
