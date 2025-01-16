import defu from "defu"
import gitignore from "eslint-config-flat-gitignore"
import typescriptPlugin from "typescript-eslint"

import { imports } from "./configs/imports"
import { jsx } from "./configs/jsx"
import { perfectionist } from "./configs/perfectionist"
import { prettier } from "./configs/prettier"
import { reactHooks } from "./configs/react-hooks"
import { typescript, TypeScriptOptions } from "./configs/typescript"

type AdditionalConfigs = Parameters<typeof typescriptPlugin.config>

interface ESLintConfigOptions {
  ignores?: Array<string>
  typescript?: {
    enabled: boolean
    options?: TypeScriptOptions
  }
  reactHooks?: {
    enabled: boolean
  }
}

const defaultOptions: ESLintConfigOptions = {
  ignores: ["*.config.*"],
  typescript: {
    enabled: true,
  },
  reactHooks: {
    enabled: false,
  },
}

function optional(
  enabled: boolean,
  config: ReturnType<typeof typescriptPlugin.config>,
): Array<ReturnType<typeof typescriptPlugin.config>> {
  return enabled ? [config] : []
}

const eslintConfig = (
  options?: ESLintConfigOptions,
  ...additionalConfigs: AdditionalConfigs
): ReturnType<typeof typescriptPlugin.config> => {
  const optionsWithDefaults = defu(
    options,
    defaultOptions,
  ) as Required<ESLintConfigOptions>

  return typescriptPlugin.config(
    {
      ignores: optionsWithDefaults.ignores,
    },
    {
      extends: [
        gitignore(),
        typescript(optionsWithDefaults.typescript.options),
        imports(),
        perfectionist(),
        prettier(),
        jsx(),
        ...optional(optionsWithDefaults.reactHooks.enabled, reactHooks()),
      ],
    },
    ...additionalConfigs,
  )
}

export default eslintConfig
