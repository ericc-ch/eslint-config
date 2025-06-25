import eslint from "@eslint/js"
import globals from "globals"
import process from "node:process"
import typescriptPlugin, { type configs } from "typescript-eslint"

export interface TypeScriptOptions {
  typeChecked: boolean
}

type Rules = typeof configs.base.rules

const getJsRules = (): Rules => ({
  // https://eslint.org/docs/latest/rules/#possible-problems
  "array-callback-return": "error",
  "no-constructor-return": "error",
  "no-useless-assignment": "error",
  "accessor-pairs": "error",
  "require-atomic-updates": "error",

  // https://eslint.org/docs/latest/rules/#suggestions
  complexity: ["error", { max: 16 }],
  eqeqeq: "error",
  "default-param-last": "error",
  "default-case": "error",
  "default-case-last": "error",
  "max-depth": "error",
  "max-nested-callbacks": ["error", { max: 5 }],
  "max-lines": [
    "error",
    { max: 800, skipBlankLines: true, skipComments: true },
  ],
  "max-lines-per-function": [
    "error",
    { max: 100, skipBlankLines: true, skipComments: true },
  ],
  "max-params": "error",
  "guard-for-in": "error",
  "no-implicit-coercion": "error",
  "no-lonely-if": "error",
  "no-nested-ternary": "error",
  "no-param-reassign": "error",
  yoda: "error",
})

const getTsRules = (): Rules => ({
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],
  "@typescript-eslint/no-misused-promises": [
    "error",
    { checksVoidReturn: false },
  ],
  "@typescript-eslint/restrict-template-expressions": [
    "error",
    { allowNumber: true },
  ],
  "@typescript-eslint/array-type": ["error", { default: "generic" }],
  "@typescript-eslint/no-unnecessary-condition": [
    "error",
    { allowConstantLoopConditions: true },
  ],
})

export const typescript = (
  options: TypeScriptOptions,
): ReturnType<typeof typescriptPlugin.config> => {
  const configType: keyof typeof typescriptPlugin.configs =
    options.typeChecked ? "strictTypeChecked" : "strict"
  const configTypeStylistic: keyof typeof typescriptPlugin.configs =
    options.typeChecked ? "strictTypeChecked" : "strict"

  return typescriptPlugin.config({
    ignores: ["**/package.json"],
    extends: [
      eslint.configs.recommended,
      typescriptPlugin.configs[configType],
      typescriptPlugin.configs[configTypeStylistic],
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { projectService: true, tsconfigRootDir: process.cwd() },
    },
    rules: {
      ...getJsRules(),
      ...getTsRules(),
    },
  })
}
