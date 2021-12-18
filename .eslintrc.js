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
    "filenames",
    "unicorn",
  ],
  extends: [
    "eslint:recommended",
    "google",
    "plugin:sonarjs/recommended",
    "plugin:regexp/recommended",
    "plugin:no-unsanitized/DOM",
    "plugin:compat/recommended",
  ],
  rules: {
    // Basic rules:
    "no-console": "error",
    "no-unused-vars": "warn",
    "unused-imports/no-unused-imports": "error",
    "max-len": "warn",
    // Sonar rules:
    "sonarjs/no-duplicate-string": "warn",
    // Promise rules:
    "promise/no-nesting": "error",
    "promise/valid-params": "error",
    // File names
    "filenames/match-exported": [2, [null, "kebab", "camel"]],
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
