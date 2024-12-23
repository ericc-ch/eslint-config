import defu from "defu"
import typescriptPlugin from "typescript-eslint"

import { imports } from "./configs/imports"
import { jsx } from "./configs/jsx"
import { perfectionist } from "./configs/perfectionist"
import { prettier } from "./configs/prettier"
import { typescript, TypeScriptOptions } from "./configs/typescript"

type AdditionalConfigs = Parameters<typeof typescriptPlugin.config>

interface ESLintConfigOptions {
  ignores?: Array<string>
  typescript?: {
    enabled: boolean
    options?: TypeScriptOptions
  }
  
}

const defaultOptions: ESLintConfigOptions = {
  ignores: ["*.config.*"],
  typescript: {
    enabled: true,
  }
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
        typescript(optionsWithDefaults.typescript?.options),
        imports(),
        perfectionist(),
        prettier(),
        jsx(),
      ],
    },
    ...additionalConfigs,
  )
}

export default eslintConfig
