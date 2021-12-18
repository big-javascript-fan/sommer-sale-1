module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["unused-imports"],
  extends: ["eslint:recommended", "google"],
  rules: {
    "no-console": "error",
    "no-unused-vars": "warn",
    "unused-imports/no-unused-imports": "error",
  },
};
