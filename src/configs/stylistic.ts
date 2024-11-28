import stylisticPlugin from "@stylistic/eslint-plugin";
import typescriptPlugin from "typescript-eslint";

export const stylistic = (): ReturnType<typeof typescriptPlugin.config> => {
  return typescriptPlugin.config({
    // @ts-expect-error I don't know why but the typing doesn't match
    extends: [stylisticPlugin.configs.customize({ jsx: false })],
  });
};
