# @dztools/jest-config-react-typescript

> Jest configuration for React + TypeScript templates.

[![npm](https://img.shields.io/npm/v/@dztools/jest-config-react-typescript.svg)](https://www.npmjs.com/package/@dztools/jest-config-react-typescript)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/dzervoudakes/dztools/blob/main/LICENSE)

## Installation and Dependencies

To install the package:

```sh
[npm i -D || yarn add -D] @dztools/jest-config-react-typescript
```

If peer dependencies are needed, run the following:

```sh
[npm i -D || yarn add -D] @testing-library/react jest
```

## Usage

In your local `jest.config.js` file:

```js
module.exports = {
  preset: '@dztools/jest-config-react-typescript'
};
```

## Notes

- This package has been created with the needs of the [React Scaffolder Yeoman generator](https://github.com/dzervoudakes/react-scaffolder) in mind.
- `@testing-library/jest-dom/extend-expect` is configured as part of this package.
- All defaults are overridable.

## License

[MIT](https://github.com/dzervoudakes/dztools/blob/main/LICENSE)
