module.exports = {
    root: true,
    extends: [
      'eslint:recommended',
      'plugin:n/recommended',
    ],
    parserOptions: {
      ecmaVersion: 11,
    },
    env: {
      node: true,
      es6: true,
    },
  };