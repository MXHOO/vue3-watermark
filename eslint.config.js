import eslint from '@eslint/js'
import tseslint from 'typescript-eslint' // 注意这里的变化！
import vueParser from 'vue-eslint-parser'
import vuePlugin from 'eslint-plugin-vue'
import prettierConfig from 'eslint-config-prettier'

export default [
  // 基础规则
  eslint.configs.recommended,

  // TypeScript 配置
  ...tseslint.configs.recommended,

  // Vue3 配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module'
      }
    },
    plugins: {
      vue: vuePlugin
    },
    rules: {
      ...vuePlugin.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off'
    }
  },

  // 自定义规则
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'warn'
    }
  },

  // Prettier 集成
  prettierConfig
]
