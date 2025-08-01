import css from "@eslint/css"
import typescriptPlugin from "typescript-eslint"

export const cssConfig = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
  })
}
