module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module', //类型为module，因为代码使用了使用了ECMAScript模块,
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  env: {
    browser: true //预定义的全局变量，这里是浏览器环境
  },
  extends: ['standard'],
  plugins: ['react', 'jsx-a11y', 'import', 'promise', 'vuefix', 'html'],
  rules: {
    'vuefix/vuefix': [2, { auto: true }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 1
      }
    ],
    'space-before-function-paren': 0,
    semi: 0,
    index: 0,
    'no-new': 0,
    'no-unused-vars': 0,
    'no-undef': 0
  }
};
