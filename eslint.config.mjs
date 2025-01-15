import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      "**/lib/*",
      "**/coverage/*",
      "**/client/*.js",
      "**/jest.config.js",
      "**/storybook-static/**",
      "**/node_modules/**",
      ".eslintrc.js",
    ],
  },
  {
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/camelcase": 0,
      "@typescript-eslint/interface-name-prefix": 0,
      "@typescript-eslint/no-use-before-define": 0,
      "react/display-name": 0,
      "react/prop-types": 0,
      "react/no-children-prop": 0,
      "@typescript-eslint/no-unused-vars": ["error"],
      "eol-last": ["error", "always"],
      "@typescript-eslint/no-empty-object-type": 0,
    },
  },
];
