# @dztools/webpack-config-react | Changelog

## v1.4.0

**Release Date:** 2021-02-02

- Convert `@hot-loader/react-dom` dependency to peer dependency.

## v1.3.3

**Release Date:** 2021-01-14

- Fix `sourceMapFilename` filename extension in `webpack.prod.js`.

## v1.3.2

**Release Date:** 2020-09-10

- Enable `port` override in `devServer` config.

## v1.3.1

**Release Date:** 2020-09-05

- Move `webpack.EnvironmentPlugin` definition to base config.

## v1.3.0

**Release Date:** 2020-08-15

- Implement `webpack-dev-server`.

## v1.2.1

**Release Date:** 2020-08-04

- Update peer dependencies.

## v1.2.0

**Release Date:** 2020-08-03

- Resolve paths for `webpack` loaders locally; shifts dependencies to this package and away from consumers.

## v1.1.0

**Release Date:** 2020-08-03

- Utilize `process.cwd()` for config entry point instead of `__dirname` from the consuming project.

## v1.0.1

**Release Date:** 2020-08-02

- Move `webpack` to dev dependencies to avoid concurrency issues with consuming apps.

## v1.0.0

**Release Date:** 2020-08-02

- Initial release.
