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
  ignores?: Array<string>

  // TypeScript configuration
  typescript?: {
    enabled: boolean  // defaults to true
    options?: {
      typeChecked?: boolean // defaults to true
    }
  }

  // React Hooks configuration
  reactHooks?: {
    enabled: boolean // defaults to false
  }

  // Package.json rules configuration
  packageJson?: {
    options?: {
      public?: boolean // defaults to true
    }
  }
}
```

Default configuration:
```javascript
const defaults = {
  ignores: [],
  typescript: {
    enabled: true,
    options: {
      typeChecked: true,
    },
  },
  reactHooks: {
    enabled: false,
  },
  packageJson: {
    options: {
      public: true,
    },
  },
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
    enabled: true,
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
  reactHooks: {
    enabled: true
  }
});
```

### Private Package Configuration

```javascript
import eslintConfig from "@echristian/eslint-config";

export default eslintConfig({
  packageJson: {
    options: {
      public: false
    }
  }
});
```

## Dependencies

This config includes the following major dependencies:

- `@eslint/js`: Core ESLint rules
- `@eslint/json`: JSON support
- `typescript-eslint`: TypeScript support
- `@stylistic/eslint-plugin`: Style-related rules
- `eslint-plugin-unused-imports`: Unused imports management
- `eslint-plugin-perfectionist`: Additional best practices
- `eslint-plugin-prettier`: Prettier integration
- `eslint-plugin-regexp`: Regular expression linting
- `eslint-plugin-de-morgan`: Logical expression optimization
- `eslint-plugin-package-json`: Package.json validation
- `eslint-plugin-react-hooks`: React Hooks linting rules

## License

MIT - See [LICENSE](./LICENSE) for more information.
