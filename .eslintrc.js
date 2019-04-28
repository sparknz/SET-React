module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "@typescript-eslint",
    'react',
  ],
  rules: {
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    indent: ['error', 4],
  },
  "import/resolver": {
    "typescript": {},
  }
};
