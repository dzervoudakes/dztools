# @dztools/webpack-config-react

> Webpack base, dev, and prod configurations for React + JavaScript templates.

[![npm](https://img.shields.io/npm/v/@dztools/webpack-config-react.svg)](https://www.npmjs.com/package/@dztools/webpack-config-react)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/dzervoudakes/dztools/blob/main/LICENSE)

## Installation and Dependencies

To install the package:

```sh
[npm i -D || yarn add -D] @dztools/webpack-config-react
```

If peer dependencies are needed, run the following:

```sh
[npm i -D || yarn add -D] @hot-loader/react-dom webpack webpack-cli webpack-dev-server
```

**Note:** The version of `@hot-loader/react-dom` must match your local version of `react` and `react-dom`.

## Usage

In your local `webpack.base.js` or `webpack.common.js` file:

```js
const { webpackBaseConfig } = require('@dztools/webpack-config-react');

module.exports = webpackBaseConfig;
```

In your local `webpack.dev.js` file:

```js
const { webpackDevConfig } = require('@dztools/webpack-config-react');

module.exports = webpackDevConfig;
```

In your local `webpack.prod.js` file:

```js
const { webpackProdConfig } = require('@dztools/webpack-config-react');

module.exports = webpackProdConfig;
```

## Notes

- This package has been created with the needs of the [React Scaffolder Yeoman generator](https://github.com/dzervoudakes/react-scaffolder) in mind.
- The base configuration expects both `./src/polyfills.js` and `./src/index.jsx` to exist for the entry point, and the build will fail if these files are not found.
- Your React app will also need a local `webpack.config.js` file responsible for merging dev and prod configs with the base config as needed.

Example, basic `webpack.config.js` file:

```js
const { merge } = require('webpack-merge');
const baseConfig = require('./build/webpack.base');

const envs = {
  development: 'dev',
  production: 'prod'
};

const env = envs[process.env.NODE_ENV || 'development'];
const envConfig = require(`./build/webpack.${env}.js`);

module.exports = merge(baseConfig, envConfig);
```

## Extending and Customization

For adding or customizing Webpack configuration options, I recommend utilizing the [webpack-merge](https://github.com/survivejs/webpack-merge) package and documentation.
The `webpack-merge` package allows for efficient Webpack configuration extension and customization.

Basic example:

```js
const path = require('path');
const { merge } = require('webpack-merge');
const { webpackBaseConfig } = require('@dztools/webpack-config-react');

module.exports = merge(webpackBaseConfig, {
  resolve: {
    alias: {
      '@alias': path.resolve('path', 'to', 'directory')
    }
  }
});
```

## License

[MIT](https://github.com/dzervoudakes/dztools/blob/main/LICENSE)
