import perfectionistPlugin from "eslint-plugin-perfectionist"
import typescriptPlugin from "typescript-eslint"

export const perfectionist = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      "perfectionist/sort-array-includes": "error",
      "perfectionist/sort-exports": "error",
      "perfectionist/sort-imports": "error",
      "perfectionist/sort-modules": "error",
      "perfectionist/sort-named-exports": "error",
    },
  })
}
