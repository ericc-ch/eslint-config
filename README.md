# @echristian/eslint-config

A modern and opinionated ESLint configuration with TypeScript and JSX support.

## Installation

Using npm:

```bash
npm install -D @echristian/eslint-config eslint
```

Using yarn:

```bash
yarn add -D @echristian/eslint-config eslint
```

Using pnpm:

```bash
pnpm add -D @echristian/eslint-config eslint
```

## Usage

Create an `eslint.config.js` (or `eslint.config.ts`) file in your project root:

```typescript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  // Configuration options here
});
```

## Example Configurations

### Basic TypeScript Project with JSX

```typescript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  ignores: ["dist/"],
  jsx: true,
});
```

### TypeScript Project without Type Checking

```typescript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  ignores: ["dist/"],
  typescript: {
    typeChecked: false,
  },
});
```

## Dependencies

This config includes the following major dependencies:

- `@eslint/js`: Core ESLint rules
- `typescript-eslint`: TypeScript support
- `@stylistic/eslint-plugin`: Style-related rules
- `eslint-plugin-unused-imports`: Unused imports management
- `eslint-plugin-perfectionist`: Additional best practices

## License

MIT - See [LICENSE](./LICENSE) for more information.
