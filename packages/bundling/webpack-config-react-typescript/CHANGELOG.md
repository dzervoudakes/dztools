# @dztools/webpack-config-react-typescript | Changelog

## v2.4.0

**Release Date:** 2022-06-06

- Migrate `onBeforeSetupMiddleware` to `setupMiddlewares` in dev server config.
- Update peer dependencies.

## v2.3.1

**Release Date:** 2022-06-05

- Use `contenthash` instead of `chunkhash` for extracted CSS caching.

## v2.3.0

**Release Date:** 2021-10-06

- Remove progress plugin from development builds.
- Update package dependencies.

## v2.2.0

**Release Date:** 2021-09-19

- Update chunk splitting for simplicity and performance.

## v2.1.0

**Release Date:** 2021-09-04

- Reintroduce `webpack-dev-server-waitpage` with default browser open behavior.
  - **Note:** Changelog notes from `v2.0.0` inaccurately suggested incompatibility with Webpack `v5`. It turned out to be an issue with symlinks during testing.
  - If you wish to disable browser `open: true` functionality, add the `--no-open` flag to your local `webpack serve` command.

## v2.0.2

**Release Date:** 2021-09-04

- Display build progress in development.

## v2.0.1

**Release Date:** 2021-09-03

- Prevent overlay on warnings.

## v2.0.0

**Release Date:** 2021-09-03

- Migrate Webpack `v4` to `v5`.
  - **Note:** Given changes to Webpack's default bundling process, apps may no longer work in IE11 unless if your local `browserslist` specifies support for it.
  - It has been decided to no longer actively verify support for IE, for any version, moving forward.
  - More on this here: [official documentation](https://webpack.js.org/migrate/5/#need-to-support-an-older-browser-like-ie-11)
- Drop support for `*.mjs` files.
- Remove `@shared` import alias.
- Swap `optimize-css-assets-webpack-plugin` with `css-minimizer-webpack-plugin`.
- Remove `hard-source-webpack-plugin`, as caching comes out of the box with Webpack `v5`.
- Remove `terser-webpack-plugin`, as this comes out of the box with Webpack `v5`.
- Remove `file-loader` and `url-loader` in favor of built-in `asset/resource` type.
- Remove `react-dev-utils`, as it was adding bloat and vulnerabilities with little value.
  - **Note:** When installing new packages, you will now need to restart the dev server prior to using them.
- Remove `webpack-dev-server-waitpage` due to incompatibility with Webpack `v5` and low usage/weekly downloads.
- Disable dev server `open: true` property.
  - **Note:** If you wish to re-enable this behavior, add the `--open` flag to your local `webpack serve` command.

## v1.4.1

**Release Date:** 2021-02-02

- Bug fix, remove `require.resolve` around `@hot-loader/react-dom` alias in `webpack.dev.js`.

## v1.4.0

**Release Date:** 2021-02-02

- Convert `@hot-loader/react-dom` dependency to peer dependency.

## v1.3.5

**Release Date:** 2021-01-14

- Fix `sourceMapFilename` filename extension in `webpack.prod.js`.

## v1.3.4

**Release Date:** 2020-09-10

- Enable `port` override in `devServer` config.

## v1.3.3

**Release Date:** 2020-09-05

- Move `webpack.EnvironmentPlugin` definition to base config.

## v1.3.2

**Release Date:** 2020-08-17

- Switch back to `ts-loader` in favor of a more simplified HMR pattern in `react-scaffolder`.

## v1.3.1

**Release Date:** 2020-08-15

- Migrated from `ts-loader` to `awesome-typescript-loader` for HMR compatibility with `webpack-dev-server`.

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

## v1.0.0

**Release Date:** 2020-08-02

- Initial release.
