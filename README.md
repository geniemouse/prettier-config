<!-- MarkdownTOC levels="2,3,4" -->

1. [Installation](#installation)
1. [Configuration](#configuration)
    1. [Overriding rules](#overriding-rules)

<!-- /MarkdownTOC -->

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

**NOTE:**
This method does not offer a way to extend the shared configuration. To do that, see the "Overriding rules" section below.

### Overriding rules

If you need to override some properties from this shared configuration, import it in a `prettierrc.js` file and export the modifications:

```javascript
module.exports = {
    ...require("@geniemouse/prettier-config"),
    // Shared Prettier configuration rule overrides...
    semi: false
};
```

<!-- LINK REFERENCES -->

[prettier]: https://prettier.io
[install prettier]: https://prettier.io/docs/en/install.html
[prettier configuration file]: https://prettier.io/docs/en/configuration.html

<!-- end: LINK REFERENCES -->
