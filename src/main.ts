import json from "@eslint/json"
import defu from "defu"
import gitignore from "eslint-config-flat-gitignore"
import { RequiredDeep } from "type-fest"
import typescriptPlugin from "typescript-eslint"

import { deMorgan } from "./configs/de-morgan"
import { imports } from "./configs/imports"
import { jsx } from "./configs/jsx"
import { packageJson, PackageJsonOptions } from "./configs/package-json"
import { perfectionist } from "./configs/perfectionist"
import { prettier } from "./configs/prettier"
import { reactHooks } from "./configs/react-hooks"
import { regexp } from "./configs/regexp"
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
  packageJson?: {
    options?: PackageJsonOptions
  }
}

const defaultOptions: RequiredDeep<ESLintConfigOptions> = {
  ignores: [],
  typescript: {
    enabled: true,
    options: {
      typeChecked: true,
    },
  },
  reactHooks: {
    enabled: false,
  },
  packageJson: {
    options: {
      public: true,
    },
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
  ) as RequiredDeep<ESLintConfigOptions>

  return typescriptPlugin.config(
    {
      ignores: optionsWithDefaults.ignores,
    },
    {
      plugins: {
        json,
      },
    },
    {
      extends: [
        gitignore(),
        packageJson(optionsWithDefaults.packageJson.options),

        ...optional(optionsWithDefaults.reactHooks.enabled, reactHooks()),
        perfectionist(),
        imports(),
        typescript(optionsWithDefaults.typescript.options),
        deMorgan(),
        regexp(),

        // Stylistic
        jsx(),
        prettier(),
      ],
    },
    ...additionalConfigs,
  )
}

export default eslintConfig
