import markdown from "@eslint/markdown"
import typescriptPlugin from "typescript-eslint"

export interface MarkdownOptions {
  frontMatter?: "yaml" | "toml" | "json" | false
  language?: "commonmark" | "gfm"
}

export const markdownConfig = (
  options: MarkdownOptions = {},
): ReturnType<typeof typescriptPlugin.config> => {
  const { frontMatter = false, language = "gfm" } = options

  return typescriptPlugin.config({
    files: ["**/*.md"],
    plugins: {
      markdown,
    },
    language: `markdown/${language}`,
    ...(frontMatter && {
      languageOptions: {
        // @ts-expect-error - frontmatter option exists in @eslint/markdown
        frontmatter: frontMatter,
      },
    }),
  })
}
