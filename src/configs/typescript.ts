import eslint from "@eslint/js"
import globals from "globals"
import process from "node:process"
import typescriptPlugin from "typescript-eslint"

export interface TypeScriptOptions {
  typeChecked: boolean
}

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
    },
  })
}
