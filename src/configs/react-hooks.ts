/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// @ts-expect-error eslint-plugin-react-hooks don't have typing
import reactHooksPlugin from "eslint-plugin-react-hooks"
import typescriptPlugin from "typescript-eslint"

export const reactHooks = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    files: ["**/*.tsx", "**/*.jsx"],
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  })
}
