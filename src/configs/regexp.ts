import regexpPlugin from "eslint-plugin-regexp"
import typescriptPlugin from "typescript-eslint"

export const regexp = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    extends: [regexpPlugin.configs["flat/recommended"]],
    plugins: {
      regexp: regexpPlugin,
    },
  })
}
