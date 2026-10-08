// Configuración de ESLint (formato «flat config», ESLint 9 o superior)
import js from '@eslint/js'

export default [
  js.configs.recommended, // las reglas recomendadas: variables sin usar, sin declarar…
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { console: 'readonly', window: 'readonly', document: 'readonly' }
    },
    rules: {
      eqeqeq: 'error',        // obliga a usar === y !==
      'no-var': 'error',      // prohíbe var
      'prefer-const': 'error' // const si la variable no se reasigna
    }
  }
]
