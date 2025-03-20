import packageJsonPlugin from "eslint-plugin-package-json"
import typescriptPlugin from "typescript-eslint"

export interface PackageJsonOptions {
  package: boolean
}

export const packageJson = (
  options: PackageJsonOptions,
): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    ...packageJsonPlugin.configs.recommended,
    rules: {
      ...packageJsonPlugin.configs.recommended.rules,

      "package-json/require-author": "error",
      "package-json/require-files": options.package ? "error" : "off",
      "package-json/require-keywords": options.package ? "error" : "off",
    },
  })
}
