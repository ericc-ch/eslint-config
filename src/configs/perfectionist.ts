import perfectionistPlugin from 'eslint-plugin-perfectionist'
import typescriptPlugin from 'typescript-eslint'

export const perfectionist = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    extends: [perfectionistPlugin.configs['recommended-natural']],
  })
}
