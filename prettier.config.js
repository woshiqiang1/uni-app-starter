// Prettier配置文档：https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 180,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: true,
  //自定义文件后缀对应的parser
  parsers: {
    '.nvue': 'vue',
    '.ux': 'vue'
  }
}
