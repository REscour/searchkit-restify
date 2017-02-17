module.exports = {
  root: true,

  extends: [
    'eslint:recommended'
  ],

  env: {
    browser: false,
    commonjs: true,
    es6: true,
    jasmine: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: true,
      modules: true,
      classes: true,
      experimentalObjectRestSpread: true
    }
  },

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$',
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },

  rules: {
    'camelcase': 'error',
    'no-case-declarations': 0,
    'new-cap': ['error', { properties: false }],
    'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
    'dot-location': ['error', 'property'],
    'no-dupe-args': ['error'],
    'no-console': [1, { allow: ['info', 'error'] }],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'object-shorthand': ['error', 'always'],
    'quote-props': ['error', 'consistent'],
    'no-array-constructor': ['error'],
    'no-new-object': ['error'],
    'array-callback-return': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'arrow-parens': ['error', 'always'],
    'no-iterator': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-self-compare': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'no-nested-ternary': 'error',
    'no-useless-constructor': 'error',
    'no-duplicate-imports': 'error',
    'operator-assignment': ['error', 'always'],
    'yoda': 'error',
    'no-use-before-define': 'error',
    'one-var': ['error', {
      var: 'never',
      let: 'never',
      const: 'never'
    }],
    'no-alert': ['error'],
    'comma-style': ['error', 'last'],
    'padded-blocks': ['error', 'never'],
    'no-lonely-if': 'error',
    'no-negated-condition': 1,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-whitespace-before-property': 'error',
    'space-infix-ops': ['error', { int32Hint: false }],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': ['error', { before: true }],
    'eqeqeq': ['error', 'smart'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'quotes': ['error', 'single'],
    'callback-return': 'error',
    'no-mixed-requires': 'error',
    'block-spacing': 'error',
    'max-len': ['error', 120, {
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true
    }]
  }
};
