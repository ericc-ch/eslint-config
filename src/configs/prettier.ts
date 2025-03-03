import prettierPlugin from "eslint-plugin-prettier/recommended"
import typescriptPlugin from "typescript-eslint"

export interface PrettierOptions {
  plugins: Array<string>
}

export const prettier = (
  options: PrettierOptions,
): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    extends: [prettierPlugin],
    rules: {
      "prettier/prettier": [
        "error",
        {
          experimentalOperatorPosition: "start",
          experimentalTernaries: true,
          semi: false,
          plugins: options.plugins,
        },
      ],
    },
  })
}
