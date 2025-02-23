import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsESLint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'

export default [
  {
    ignores: ['dist'], // Ignora a pasta dist
  },
  {
    // Configuração para arquivos TypeScript no projeto principal
    files: ['src/**/*.{ts,tsx}'], // Aplica apenas a arquivos TypeScript na pasta src
    languageOptions: {
      ecmaVersion: 2020, // Define a versão do ECMAScript
      sourceType: 'module', // Define o tipo de módulo (import/export)
      globals: {
        ...globals.browser, // Adiciona globais do navegador
        ...globals.jest, // Adiciona globais do Jest
        ...globals.node, // Adiciona globais do Node.js
        React: 'readonly', // Adiciona React como global
      },
      parser: tsParser, // Usa o parser do TypeScript
    },
    plugins: {
      '@typescript-eslint': tsESLint, // Plugin do TypeScript
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react: reactPlugin, // Plugin do React
    },
    rules: {
      ...tsESLint.configs.recommended.rules, // Regras recomendadas do TypeScript
      ...reactHooks.configs.recommended.rules, // Regras recomendadas do react-hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Configuração específica para arquivos do Cypress
    files: ['cypress/**/*.{ts,tsx}'], // Aplica apenas a arquivos TypeScript na pasta cypress
    languageOptions: {
      ecmaVersion: 2020, // Define a versão do ECMAScript
      sourceType: 'module', // Define o tipo de módulo (import/export)
      globals: {
        ...globals.browser, // Adiciona globais do navegador
        ...globals.cypress, // Adiciona globais do Cypress
      },
      parser: tsParser, // Usa o parser do TypeScript
    },
    plugins: {
      '@typescript-eslint': tsESLint, // Plugin do TypeScript
    },
    rules: {
      ...tsESLint.configs.recommended.rules, // Regras recomendadas do TypeScript
    },
  },
  js.configs.recommended, // Configurações recomendadas do ESLint
  prettier, // Configurações do Prettier
]
