import { defineConfig } from '@llius/eslint-config'

export default defineConfig(
  {
    typescript: true,
    vue: true,
    next: true,
    yaml: true,
    prettier: true
  },
  {
    rules: {
      // 去除一行中的末尾多余空格
      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: true
        }
      ],
      // v-model:visible检测
      'vue/no-v-model-argument': 'off',
      'vue/no-v-for-template-key-on-child': 'off',
      'vue/no-v-for-template-key': 'off',
      'vue/no-use-v-if-with-v-for': 'off',
      'vue/no-v-html': 'off',
      // fn () 去除函数调用后的空格
      'func-call-spacing': ['error', 'never'],
      'vue/v-on-event-hyphenation': 'off',
      // 允许单词组件名
      'vue/multi-word-component-names': ['off'],
      // 非模板字符串不需要使用反引号
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false
        }
      ],
      semi: ['error', 'never'],
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: false,
          vueIndentScriptAndStyle: false,
          singleQuote: true,
          trailingComma: 'none',
          bracketSpacing: true,
          arrowParens: 'always',
          requirePragma: false,
          insertPragma: false,
          htmlWhitespaceSensitivity: 'ignore',
          endOfLine: 'auto'
        },
        {
          usePrettierrc: false
        }
      ]
    }
  }
)
