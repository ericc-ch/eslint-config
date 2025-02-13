import deMorganPlugin from "eslint-plugin-de-morgan"
import typescriptPlugin from "typescript-eslint"

export const deMorgan = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    extends: [deMorganPlugin.configs.recommended],
  })
}
