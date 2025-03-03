import stylisticPlugin from "@stylistic/eslint-plugin"
import a11yPlugin from "eslint-plugin-jsx-a11y"
import typescriptPlugin from "typescript-eslint"

export const jsx = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    extends: [a11yPlugin.flatConfigs.strict],
    files: ["**/*.tsx"],
    plugins: {
      "@stylistic": stylisticPlugin,
    },
    rules: {
      "@stylistic/jsx-sort-props": [
        "error",
        {
          ignoreCase: true,
          callbacksLast: true,
          shorthandFirst: true,
          reservedFirst: true,
        },
      ],
      "@stylistic/jsx-self-closing-comp": [
        "error",
        {
          component: true,
          html: false,
        },
      ],
    },
  })
}
