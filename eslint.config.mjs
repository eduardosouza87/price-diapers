import pluginJs from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    ignores: ['node_modules/**', 'dist', 'eslint.config.js'],

    files: ['**/*.ts'],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: 'vue-eslint-parser',
        extraFileExtensions: ['.vue']
      }
    },

    plugins: {
      prettier
    },

    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      quotes: ['warn', 'single'],
      'no-empty': ['warn', { allowEmptyCatch: true }],
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
      curly: ['error', 'all'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'id-length': ['error', { min: 2, exceptions: ['_'] }]
    }
  },

  {
    files: ['**/*.vue'],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },

    plugins: {
      vue: pluginVue,
      prettier
    },

    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'vue/require-valid-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/no-multiple-template-root': ['error'],
      'vue/no-unused-vars': 'error',
      'vue/component-tags-order': [
        'error',
        {
          order: ['script', 'template', 'style']
        }
      ],
      'vue/component-api-style': ['error', ['script-setup', 'composition']]
    }
  }
]
