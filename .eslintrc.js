const path = require('path')

module.exports = {
  parser: 'babel-eslint', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')], // for absolute import
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      moduleDirectory: ['node_modules', 'src/'],
    },
    'import/extensions': 'off',
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:import/errors', // enabling import errors
    'plugin:import/warnings', // enabling import warnings,
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'react/display-name': 0, // turning off component display name for some scenario
    'import/no-duplicates': 2, // disabling multiple lines import from same file
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // first of all import builtin modules like fs, path, etc..
          'external', // then third party libraries like lodash etc..
          'internal', // then our internal absolute imports
          'index', // then relatively import something from current directory
          'sibling', // then relatively import something inside nested directory of current directory
          'parent', // then relatively import some thing from parent directory
          'object', // lastly object if any,
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order:
            'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
}
