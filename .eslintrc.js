module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // else/catch换行
    // doc: http://eslint.cn/docs/4.0.0/rules/brace-style
    "brace-style": ["error", "stroustrup"],
    // 多个条件判断符号，放到前面
    "operator-linebreak": ["error", "before"],
    // 函数 function 和 () 之间不要有空格
    'space-before-function-paren':['error', 'never'],
    // 代码块不能有尾随空格
    'no-trailing-spaces': 'error',
  }
}
