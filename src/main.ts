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
import { prettier, PrettierOptions } from "./configs/prettier"
import { react, ReactOptions } from "./configs/react"
import { reactHooks } from "./configs/react-hooks"
import { regexp } from "./configs/regexp"
import { typescript, TypeScriptOptions } from "./configs/typescript"
import { unicorn } from "./configs/unicorn"

type AdditionalConfigs = Parameters<typeof typescriptPlugin.config>

interface ESLintConfigOptions {
  ignores?: Array<string>
  typescript?: { options?: TypeScriptOptions }

  react?: { enabled?: boolean; options?: ReactOptions }
  reactHooks?: { enabled: boolean }

  prettier?: PrettierOptions
  packageJson?: PackageJsonOptions
}

const defaultOptions: Required<ESLintConfigOptions> = {
  ignores: [],
  typescript: { options: { typeChecked: true } },

  react: { enabled: false, options: { typeChecked: true } },
  reactHooks: { enabled: false },

  prettier: {
    experimentalOperatorPosition: "start",
    experimentalTernaries: true,
    semi: false,
  },
  packageJson: { package: false },
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
    { ignores: optionsWithDefaults.ignores },
    { plugins: { json } },
    {
      extends: [
        gitignore(),
        packageJson(optionsWithDefaults.packageJson),

        // React
        ...optional(
          optionsWithDefaults.react.enabled,
          react(optionsWithDefaults.react.options),
        ),
        ...optional(optionsWithDefaults.reactHooks.enabled, reactHooks()),

        typescript(optionsWithDefaults.typescript.options),
        unicorn(),
        imports(),
        deMorgan(),
        regexp(),

        // Stylistic
        jsx(),
        prettier(optionsWithDefaults.prettier),
        perfectionist(),
      ],
    },
    ...additionalConfigs,
  )
}

export default eslintConfig
