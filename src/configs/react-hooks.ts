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
