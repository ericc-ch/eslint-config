import css from "@eslint/css"
import typescriptPlugin from "typescript-eslint"

export const cssConfig = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    files: ["**/*.css"],
    plugins: {
      // @eslint/css doesn't have type definitions

      css,
    },
    language: "css/css",
  })
}
