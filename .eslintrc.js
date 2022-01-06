module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "unused-imports",
    "sonarjs",
    "this",
    "regexp",
    "promise",
    "unicorn",
  ],
  extends: [
    "eslint:recommended",
    "google",
    "plugin:sonarjs/recommended",
    "plugin:regexp/recommended",
    "plugin:no-unsanitized/DOM",
    "plugin:compat/recommended",
    "plugin:json/recommended",
    "plugin:tailwind/recommended",
  ],
  rules: {
    // Basic rules:
    "no-console": "error",
    "no-unused-vars": "warn",
    "unused-imports/no-unused-imports": "error",
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    "max-len": "off",
    "require-jsdoc": "warn",
    // Sonar rules:
    "sonarjs/no-duplicate-string": "warn",
    "sonarjs/no-redundant-boolean": "warn",
    // Promise rules:
    "promise/no-nesting": "error",
    "promise/valid-params": "error",
    // Unicorn
    "unicorn/no-empty-file": "error",
    "unicorn/no-lonely-if": "error",
    "unicorn/no-array-for-each": "warn",
    "unicorn/no-process-exit": "error",
    "unicorn/no-this-assignment": "error",
    "unicorn/prefer-ternary": "warn",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-array-method-this-argument": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/expiring-todo-comments": "error",
    "unicorn/no-useless-undefined": "error",
    "unicorn/no-useless-length-check": "error",
  },
};
