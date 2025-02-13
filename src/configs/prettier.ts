import prettierPlugin from "eslint-plugin-prettier/recommended"
import typescriptPlugin from "typescript-eslint"

export const prettier = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    extends: [prettierPlugin],
    rules: {
      "prettier/prettier": [
        "error",
        {
          experimentalTernaries: true,
          semi: false,
          plugins: ["prettier-plugin-packagejson"],
        },
      ],
    },
  })
}
