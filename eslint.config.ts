import eslintConfig from "./src/main";

export default eslintConfig(
  {
    ignores: ["dist/"],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
