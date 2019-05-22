# `@geniemouse/prettier-config`

Keep project code formatting consistent across projects with [Prettier] and this base configuration.

## Installation

1. [Install Prettier] locally:

```shell
# Using npm:
npm install --save-dev --save-exact prettier

# Using yarn:
yarn add prettier --dev --exact
```

2. Install the _GenieMouse_ Prettier configuration package locally:

```shell
# Using npm:
npm install --save-dev @geniemouse/prettier-config

# Using yarn:
yarn add --dev @geniemouse/prettier-config
```

## Configuration

Reference the configuration package in your project's `package.json` file:

```jsonc
{
    // ...
    "prettier": "@geniemouse/prettier-config"
    // ...
}
```

These imported settings can be overridden by a [Prettier configuration file] added to your project root directory.

<!-- LINK REFERENCES -->

[prettier]: https://prettier.io
[install prettier]: https://prettier.io/docs/en/install.html
[prettier configuration file]: https://prettier.io/docs/en/configuration.html

<!-- end: LINK REFERENCES -->
