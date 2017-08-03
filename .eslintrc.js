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
  extends: ['prettier'],
  plugins: ['react', 'jsx-a11y', 'import','vue', 'html', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        parser: 'babylon'
      }
    ]
  }
};
