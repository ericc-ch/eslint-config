import json from "@eslint/json"
import defu from "defu"
import gitignore from "eslint-config-flat-gitignore"
import { RequiredDeep } from "type-fest"
import typescriptPlugin from "typescript-eslint"

import { deMorgan } from "./configs/de-morgan"
import { imports } from "./configs/imports"
import { jsx } from "./configs/jsx"
import { packageJson } from "./configs/package-json"
import { perfectionist } from "./configs/perfectionist"
import { prettier, PrettierOptions } from "./configs/prettier"
import { react, ReactOptions } from "./configs/react"
import { reactHooks } from "./configs/react-hooks"
import { regexp } from "./configs/regexp"
import { typescript, TypeScriptOptions } from "./configs/typescript"
import { unicorn } from "./configs/unicorn"
import { optional } from "./lib/optional"

type AdditionalConfigs = Parameters<typeof typescriptPlugin.config>

interface ESLintConfigOptions {
  ignores?: Array<string>
  typescript?: { options?: TypeScriptOptions }

  react?: { enabled?: boolean; options?: ReactOptions }
  reactHooks?: { enabled: boolean }

  jsx?: { enabled?: boolean; a11y?: boolean }

  prettier?: PrettierOptions
}

const defaultOptions: Required<ESLintConfigOptions> = {
  ignores: [],
  typescript: { options: { typeChecked: true } },

  react: { enabled: false, options: { typeChecked: true } },
  reactHooks: { enabled: false },

  jsx: { enabled: false, a11y: true },

  prettier: {
    experimentalOperatorPosition: "start",
    experimentalTernaries: true,
    semi: false,
  },
}

export type Config = ReturnType<typeof typescriptPlugin.config>

const eslintConfig = (
  options?: ESLintConfigOptions,
  ...additionalConfigs: AdditionalConfigs
): Config => {
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
        packageJson(),

        // React
        ...optional(
          optionsWithDefaults.react.enabled,
          react(optionsWithDefaults.react.options),
        ),
        ...optional(optionsWithDefaults.reactHooks.enabled, reactHooks()),

        ...optional(
          optionsWithDefaults.jsx.enabled,
          jsx(optionsWithDefaults.jsx),
        ),

        typescript(optionsWithDefaults.typescript.options),
        unicorn(),
        imports(),
        deMorgan(),
        regexp(),

        // Stylistic
        prettier(optionsWithDefaults.prettier as PrettierOptions),
        perfectionist(),
      ],
    },
    ...additionalConfigs,
  )
}

export default eslintConfig
