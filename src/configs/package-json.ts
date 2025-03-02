import defu from "defu"
import packageJsonPlugin from "eslint-plugin-package-json/configs/recommended"
import typescriptPlugin from "typescript-eslint"

export interface PackageJsonOptions {
  package?: boolean
}

const defaultOptions: PackageJsonOptions = {
  package: true,
}

export const packageJson = (
  options?: PackageJsonOptions,
): ReturnType<typeof typescriptPlugin.config> => {
  const optionsWithDefaults = defu(options, defaultOptions)

  return typescriptPlugin.config({
    ...packageJsonPlugin,
    rules: {
      ...packageJsonPlugin.rules,

      "package-json/require-author": "error",
      "package-json/require-files":
        optionsWithDefaults.package ? "error" : "off",
      "package-json/require-keywords":
        optionsWithDefaults.package ? "error" : "off",
    },
  })
}
