module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    "jest/globals": true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    "plugin:jest/recommended",
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    "jest",
    "testing-library"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}

{
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/recommended"
  ],

  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {},
    sourceType: "module"
  },
  plugins: [
    "jest",
    "testing-library"
  ],
  settings: {
  },
  rules: {
    indent: ["error", 2],
    no-empty-pattern: 0
  }
}
