const prettierConfig = require("../");

describe("@geniemouse/prettier-config:", () => {
    test("configuration object exists", () => {
        expect(prettierConfig).not.toBeUndefined();
    });

    test("matches the expected output", () => {
        expect(prettierConfig).toMatchSnapshot();
    });

    test("check overrides property has two entries", () => {
        expect(prettierConfig).toHaveProperty("overrides", expect.any(Array));
        expect(prettierConfig.overrides).toHaveLength(2);
    });

    describe("check boolean value properties", () => {
        test.each([
            "bracketSpacing",
            "jsxBracketSameLine",
            "jsxSingleQuote",
            "requirePragma",
            "semi",
            "singleQuote",
            "useTabs"
        ])("%s returns a boolean", (key) => {
            expect(prettierConfig).toHaveProperty(key, expect.any(Boolean));
        });
    });

    describe("check integer value properties", () => {
        test.each(["printWidth", "tabWidth"])("%s returns an integer", (key) => {
            expect(prettierConfig).toHaveProperty(key, expect.any(Number));
            expect(prettierConfig[key]).not.toBeNaN();
        });
    });

    describe("check string value properties", () => {
        test.each([
            "$schema",
            "arrowParens",
            "endOfLine",
            "htmlWhitespaceSensitivity",
            "proseWrap",
            "quoteProps",
            "trailingComma"
        ])("%s returns a string", (key) => {
            expect(prettierConfig).toHaveProperty(key, expect.any(String));
        });
    });
});
