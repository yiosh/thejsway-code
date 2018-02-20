module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
      }
    ],
    "no-plusplus": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-param-reassign": ["error", { "props": false }],
    "prefer-destructuring": "off",
  },
  "plugins": [
    "prettier"
  ],
  "env": {
    "browser": true
  }
};