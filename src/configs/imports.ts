import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import typescriptPlugin from 'typescript-eslint'

export const imports = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  })
}
