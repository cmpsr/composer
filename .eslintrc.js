module.exports = {
  root: true,

  extends: [
    "prettier",
    "prettier/react",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
  ],

  parser: "@typescript-eslint/parser",

  plugins: ["react", "@typescript-eslint", "react-hooks"],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },

  globals: {
    describe: true,
    it: true,
    expect: true,
    beforeEach: true,
    afterEach: true,
    beforeAll: true,
    afterAll: true,
  },

  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  settings: {
    "import/extensions": [".js"],
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/no-children-prop": 0,
  },
};
