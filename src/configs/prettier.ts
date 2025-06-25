import prettierPlugin from "eslint-plugin-prettier/recommended"
import { Config } from "prettier"
import typescriptPlugin from "typescript-eslint"

export type PrettierOptions = Config

export const prettier = (
  options: PrettierOptions,
): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    extends: [prettierPlugin],
    rules: {
      "prettier/prettier": ["error", options],
    },
  })
}
