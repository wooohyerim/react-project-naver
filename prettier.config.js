/** @type {import('prettier').Config} */
export default {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  //   import sort[s]
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
  //   import sort[e]
}
