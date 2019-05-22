/**
 * Prettier formatting options
 * ===========================
 * For more details on options:
 * -- https://prettier.io/docs/en/options.html
 */

"use strict";

module.exports = {
    $schema: "http://json.schemastore.org/prettierrc",

    // Set-up initial Prettier defaults
    // (Many of these are Prettier's own defaults reiterated)
    arrowParens: "always",
    bracketSpacing: true,
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "css",
    jsxBracketSameLine: true,
    jsxSingleQuote: false,
    printWidth: 120,
    proseWrap: "preserve",
    quoteProps: "consistent",
    requirePragma: false,
    semi: true,
    singleQuote: false,
    trailingComma: "none",
    tabWidth: 4,
    useTabs: false,

    // Overriding configurations on a per file/file-type basis
    overrides: [
        {
            files: [".eslintrc", ".htmllintrc", ".prettierrc", "*.json"],
            options: {
                parser: "json",
                requirePragma: false,
                tabWidth: 2,
                trailingComma: "none"
            }
        },
        {
            files: ["*.yaml", "*.yml"],
            options: {
                parser: "yaml",
                requirePragma: false,
                tabWidth: 2
            }
        }
    ]
};
