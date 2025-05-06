import stylisticPlugin from "@stylistic/eslint-plugin"
import a11yPlugin from "eslint-plugin-jsx-a11y"
import typescriptPlugin from "typescript-eslint"

import { optional } from "../lib/optional"

export interface JSXOptions {
  a11y: boolean
}

export const jsx = (
  options: JSXOptions,
): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    extends: [...optional(options.a11y, a11yPlugin.flatConfigs.strict)],
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
