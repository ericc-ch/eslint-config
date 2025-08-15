import packageJsonPlugin from "eslint-plugin-package-json"
import typescriptPlugin from "typescript-eslint"

export const packageJson = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    ...packageJsonPlugin.configs.recommended,
    rules: {
      ...packageJsonPlugin.configs.recommended.rules,
    },
  })
}
