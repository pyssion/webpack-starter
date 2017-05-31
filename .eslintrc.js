module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // using babel-eslint because there are experimental features not (yet) supported in eslint
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    /*****************************************************************
    * react and jsx
    *****************************************************************/
    // 'no-await-in-loop': '',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-unused-vars': 'error',
    // no-control-regex
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'warn',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'warn',
    'no-extra-parens': ['warn', 'all', { ignoreJSX: 'multi-line' }],
    'no-extra-semi': 'warn',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'warn',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'warn',
    'valid-typeof': 'error',
    'no-console': 'warn',
    // best practices
    'accessor-pairs': 'warn',
    'array-callback-return': 'off',
    'block-scoped-var': 'warn',
    'class-methods-use-this': 'warn',
    complexity: 'off',
    'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
    curly: ['error', 'multi-line'],
    'default-case': 'warn',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'guard-for-in': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'warn',
    'no-div-regex': 'error',
    'no-else-return': 'warn',
    'no-empty-function': 'warn',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'warn',
    'no-floating-decimal': 'warn',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'error',
    'no-new': 'warn',
    'no-new-func': 'warn',
    'no-new-wrappers': 'error',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-return': 'warn',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    radix: ['error', 'as-needed'],
    'require-await': 'warn',
    'vars-on-top': 'warn',
    'wrap-iife': 'warn',
    yoda: 'off',

    // Variables
    // init-declarations
    'no-catch-shadow': 'warn',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    // no-restricted-globals
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'error',

    // Stylistic
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'camelcase': 'error',
    'capitalized-comments': 'off',
    // http://eslint.org/docs/rules/comma-dangle
    // tailing comma in function is not supported in eslint (yet), hence babel-eslint
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': 'error',
    // consistent-this
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': 'warn',
    'func-names': ['error', 'as-needed'],
    // func-style
    // id-blacklist
    // id-length
    // id-match
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    // line-comment-position
    // linebreak-style
    // lines-around-comment
    // lines-around-directive
    // max-depth
    'max-len': ['error', 120],
    // max-lines
    // max-nested-callbacks
    // max-params
    // max-statements
    // max-statements-per-line
    // multiline-ternary
    'new-cap': 'error',
    'new-parens': 'error',
    // newline-after-var
    // newline-before-return
    // newline-per-chained-call
    'no-array-constructor': 'error',
    // no-bitwise
    'no-continue': 'warn',
    // no-inline-comments
    'no-lonely-if': 'error',
    // no-mixed-operators
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 1 }],
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    // no-restricted-syntax
    'no-tabs': 'error',
    // no-ternary
    'no-trailing-spaces': 'error',
    // no-underscore-dangle
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    // object-property-newline
    // one-var
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'warn',
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': 'off',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'require-jsdoc': ['warn', {
      require: {
        'FunctionDeclaration': true,
        'MethodDefinition': false,
        'ClassDeclaration': false,
        'ArrowFunctionExpression': false,
      },
    }],
    semi: ['error', 'never'],
    // semi-spacing
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'error',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: true }],
    'spaced-comment': ['error', 'always'],
    // template-tag-spacing
    // unicode-bom
    'wrap-regex': 'off',

    // ECMAScript 6
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', { before: true, after: true }],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    // no-restricted-imports
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'off',
    // symbol-description
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', { before: true, after: true }],

    /*****************************************************************
    * react and jsx
    *****************************************************************/
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',
  },
}
