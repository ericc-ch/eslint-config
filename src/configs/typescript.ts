import eslint from '@eslint/js'
import defu from 'defu'
import globals from 'globals'
import process from 'node:process'
import typescriptPlugin from 'typescript-eslint'

export interface TypeScriptOptions {
  typeChecked?: boolean
}

const defaultOptions: TypeScriptOptions = {
  typeChecked: true,
}

export const typescript = (
  options?: TypeScriptOptions,
): ReturnType<typeof typescriptPlugin.config> => {
  const optionsWithDefaults = defu(options, defaultOptions)

  return typescriptPlugin.config({
    extends: [
      eslint.configs.recommended,
      optionsWithDefaults.typeChecked
        ? typescriptPlugin.configs.strictTypeChecked
        : typescriptPlugin.configs.strict,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      // Can be replaced
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
        },
      ],
    },
  })
}
