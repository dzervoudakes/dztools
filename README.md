# @dztools

> Mono repo for various configurations to be shared across frontend applications.

[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/dzervoudakes/dztools/blob/master/LICENSE)

## Thought Process

Over time, I've developed several frontend applications which tend to share the same code formatting, lint configurations, Webpack configurations, etc.
In an effort to ensure consistency and scalability, I've decided to create a shared single source of truth for the aforementioned configurations.

## Available Configurations

### Formatting

- [eslint-config-base](packages/formatting/eslint-config-base/README.md)
- [eslint-config-react](packages/formatting/eslint-config-react/README.md)
- [eslint-config-react-typescript](packages/formatting/eslint-config-react-typescript/README.md)
- [eslint-config-typescript](packages/formatting/eslint-config-typescript/README.md)
- [prettier-config](packages/formatting/prettier-config/README.md)
- [stylelint-config](packages/formatting/stylelint-config/README.md)

### Bundlers

- [webpack-config-react](packages/bundlers/webpack-config-react/README.md)
- [webpack-config-react-typescript](packages/bundlers/webpack-config-react-typescript/README.md)
