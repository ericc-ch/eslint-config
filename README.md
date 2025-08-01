# @echristian/eslint-config

A modern and opinionated ESLint configuration with TypeScript, JSX, CSS, and Markdown support.

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

Create an `eslint.config.js` file in your project root:

```javascript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  // Configuration options here
});
```

## Configuration Options

The configuration function accepts an options object with the following structure:

```typescript
interface ESLintConfigOptions {
  // Glob patterns to ignore
  ignores?: Array<string>;

  // TypeScript configuration
  typescript?: {
    options?: {
      typeChecked?: boolean; // defaults to true
    };
  };

  // React configuration
  react?: {
    enabled?: boolean; // defaults to false
    options?: {
      typeChecked?: boolean; // defaults to true
    };
  };

  // React Hooks configuration
  reactHooks?: {
    enabled: boolean; // defaults to false
  };

  // JSX configuration
  jsx?: {
    enabled?: boolean; // defaults to false
    a11y?: boolean; // defaults to true
  };

  // Markdown configuration
  markdown?: {
    enabled?: boolean; // defaults to false
    options?: {
      language?: "commonmark" | "gfm"; // defaults to "gfm"
      frontMatter?: "yaml" | "toml" | "json" | false; // defaults to false
    };
  };

  // Prettier configuration
  prettier?: {
    experimentalOperatorPosition?: "start" | "end";
    experimentalTernaries?: boolean;
    semi?: boolean;
    // More prettier config
  };

  // Package.json rules configuration
  packageJson?: {
    package?: boolean; // defaults to false
  };
}
```

## Example Configurations

### Basic TypeScript Project

```javascript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  ignores: ["dist/"],
});
```

### TypeScript Project without Type Checking

```javascript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  typescript: {
    options: {
      typeChecked: false,
    },
  },
});
```

### React Project with Hooks

```javascript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  react: {
    enabled: true,
  },
  reactHooks: {
    enabled: true,
  },
  jsx: {
    enabled: true,
  },
});
```

### Full-Stack Project with CSS

```javascript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  ignores: ["dist/", "build/"],
  react: {
    enabled: true,
  },
  reactHooks: {
    enabled: true,
  },
  jsx: {
    enabled: true,
  },
  css: {
    enabled: true,
  },
});
```

### Documentation Project with Markdown

```javascript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  markdown: {
    enabled: true,
    options: {
      language: "gfm", // GitHub Flavored Markdown
      frontMatter: "yaml", // Enable YAML frontmatter support
    },
  },
});
```

### Complete Project with All Features

```javascript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  ignores: ["dist/", "build/"],
  react: {
    enabled: true,
  },
  reactHooks: {
    enabled: true,
  },
  jsx: {
    enabled: true,
  },
  markdown: {
    enabled: true,
    options: {
      language: "gfm",
      frontMatter: "yaml",
    },
  },
});
```

## Dependencies

This config includes the following major dependencies:

- `@eslint/js`: Core ESLint rules
- `@eslint/json`: JSON support
- `@eslint/css`: CSS support
- `@eslint/markdown`: Markdown support
- `typescript-eslint`: TypeScript support
- `@stylistic/eslint-plugin`: Style-related rules
- `eslint-plugin-unused-imports`: Unused imports management
- `eslint-plugin-perfectionist`: Additional best practices
- `eslint-plugin-prettier`: Prettier integration
- `eslint-plugin-regexp`: Regular expression linting
- `eslint-plugin-de-morgan`: Logical expression optimization
- `eslint-plugin-package-json`: Package.json validation
- `eslint-plugin-react-hooks`: React Hooks linting rules
- `@eslint-react/eslint-plugin`: React component linting

## License

MIT - See [LICENSE](./LICENSE) for more information.
