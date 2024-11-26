import defu from 'defu'
import typescriptPlugin from 'typescript-eslint'

import { imports } from './configs/imports'
import { jsx } from './configs/jsx'
import { perfectionist } from './configs/perfectionist'
import { stylistic } from './configs/stylistic'
import { typescript, TypeScriptOptions } from './configs/typescript'

type AdditionalConfigs = Parameters<typeof typescriptPlugin.config>

interface ESLintConfigOptions {
  ignores?: string[]
  jsx?: boolean
  typescript?: boolean
  typescriptOptions?: TypeScriptOptions
}

const defaultOptions: ESLintConfigOptions = {
  ignores: ['*.config.*'],
  jsx: false,
  typescript: true,
}

const eslintConfig = (
  options?: ESLintConfigOptions,
  ...additionalConfigs: AdditionalConfigs
): ReturnType<typeof typescriptPlugin.config> => {
  const optionsWithDefaults = defu(options, defaultOptions)

  return typescriptPlugin.config(
    {
      ignores: optionsWithDefaults.ignores,
    },
    {
      extends: [
        typescript(optionsWithDefaults.typescriptOptions),
        imports(),
        perfectionist(),
        stylistic(),
        ...(optionsWithDefaults.jsx ? [jsx()] : []),
      ],
    },
    ...additionalConfigs,
  )
}

export default eslintConfig
