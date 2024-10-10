/** @type {import('prettier').Config} */
export default {
  endOfLine: 'lf',
  semi: false, // ;
  singleQuote: true, // 따옴표
  tabWidth: 2,
  trailingComma: 'none', // 코드 끝에 쉼표를 넣냐 마냐
  // import sort[s]
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react',
    '',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '.css$',
    '.scss$',
    '^[.]'
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy']
  // import sort[e]
}
