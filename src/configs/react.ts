import reactPlugin from "@eslint-react/eslint-plugin"
import typescriptPlugin from "typescript-eslint"

export interface ReactOptions {
  typeChecked: boolean
}

export const react = (
  options: ReactOptions,
): ReturnType<typeof typescriptPlugin.config> => {
  const configType: keyof typeof reactPlugin.configs =
    options.typeChecked ? "recommended-type-checked" : "recommended-typescript"

  return typescriptPlugin.config({
    files: ["**/*.tsx", "**/*.ts"],
    extends: [reactPlugin.configs[configType]],
  })
}
