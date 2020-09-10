# @dztools/webpack-config-react-typescript | Changelog

## v1.3.4

**Release Date:** 2020-09-10

* Enable `port` override in `devServer` config.

## v1.3.3

**Release Date:** 2020-09-05

* Move `webpack.EnvironmentPlugin` definition to base config.

## v1.3.2

**Release Date:** 2020-08-17

* Switch back to `ts-loader` in favor of a more simplified HMR pattern in `react-scaffolder`.

## v1.3.1

**Release Date:** 2020-08-15

* Migrated from `ts-loader` to `awesome-typescript-loader` for HMR compatibility with `webpack-dev-server`.

## v1.3.0

**Release Date:** 2020-08-15

* Implement `webpack-dev-server`.

## v1.2.1

**Release Date:** 2020-08-04

* Update peer dependencies.

## v1.2.0

**Release Date:** 2020-08-03

* Resolve paths for `webpack` loaders locally; shifts dependencies to this package and away from consumers.

## v1.1.0

**Release Date:** 2020-08-03

* Utilize `process.cwd()` for config entry point instead of `__dirname` from the consuming project.

## v1.0.0

**Release Date:** 2020-08-02

* Initial release.
