module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  // using babel-eslint because there are experimental features not (yet) supported in eslint
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true,
    },
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  "rules": {
    /*****************************************************************
    * basics
    *****************************************************************/
    "no-unused-vars": "error",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    // http://eslint.org/docs/rules/comma-dangle
    // tailing comma in function is not supported in eslint (yet), hence babel-eslint
    "comma-dangle": ["error", "always-multiline"],
    /*****************************************************************
    * react and jsx
    *****************************************************************/
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    "react/jsx-uses-react": "error",
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    "react/jsx-uses-vars": "error",
  },
};