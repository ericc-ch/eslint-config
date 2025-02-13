import defu from "defu"
import packageJsonPlugin from "eslint-plugin-package-json/configs/recommended"
import typescriptPlugin from "typescript-eslint"

export interface PackageJsonOptions {
  public?: boolean
}

const defaultOptions: PackageJsonOptions = {
  public: true,
}

export const packageJson = (
  options?: PackageJsonOptions,
): ReturnType<typeof typescriptPlugin.config> => {
  const optionsWithDefaults = defu(options, defaultOptions)

  return typescriptPlugin.config({
    ...packageJsonPlugin,
    rules: {
      "package-json/require-author":
        optionsWithDefaults.public ? "error" : "off",
      "package-json/require-files":
        optionsWithDefaults.public ? "error" : "off",
      "package-json/require-keywords":
        optionsWithDefaults.public ? "error" : "off",
    },
  })
}
