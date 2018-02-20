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
  },
  "plugins": [
    "prettier"
  ],
  "env": {
    "browser": true
  }
};