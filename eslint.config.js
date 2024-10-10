import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const defaultCodeStyle = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.browser,
      ...globals.node
    }
  },
  rules: {
    'max-depth': ['error', 2], // 블록 중첩을 2단계로 제한
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }, // return 문 앞에 항상 공백 줄을 추가
      { blankLine: 'always', prev: '*', next: 'if' }, // if 문 앞에 항상 공백 줄을 추가
      { blankLine: 'always', prev: 'function', next: '*' }, // 함수 선언 후에 공백 줄 추가
      { blankLine: 'always', prev: '*', next: 'function' } // 함수 선언 전에 공백 줄 추가
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSInterfaceDeclaration',
        message: 'Interface 대신 type 을 사용하세요.'
      },
      {
        selector: 'VariableDeclaration[kind="let"]',
        message: 'let 대신 const 를 사용하세요.'
      },
      {
        selector: 'VariableDeclaration[kind="var"]',
        message: 'var 대신 const 를 사용하세요.'
      },
      {
        selector: 'SwitchStatement',
        message: 'switch 대신 if 를 사용하세요.'
      },
      {
        selector: 'ConditionalExpression',
        message: '삼항 연산자 대신 if 를 사용하세요.'
      },
      {
        selector: 'IfStatement[alternate]',
        message: 'else 대신 early return 을 사용하세요.'
      }
    ]
  }
}

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    }
  },
  defaultCodeStyle
)
