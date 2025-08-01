# AGENTS.md

## Build/Lint/Test Commands
- `pnpm build` - Build the project with tsup
- `pnpm lint` - Run ESLint on all files
- No test command configured - this is an ESLint config package

## Code Style Guidelines

### Imports & Exports
- Use ES modules (type: "module" in package.json)
- Default export for main function (eslintConfig)
- Named exports for types/interfaces
- Import order: external packages → internal configs → libs/utils

### TypeScript
- Strict mode enabled with all strict options
- Use generic array syntax: `Array<T>` not `T[]`
- Prefix unused parameters with underscore: `_param`
- Enable type checking by default (`typeChecked: true`)
- Max function length: 100 lines (200 for tests)

### Naming & Structure
- camelCase for variables/functions
- PascalCase for types/interfaces  
- Organize configs in `src/configs/` directory
- Utilities in `src/lib/`
- No comments unless absolutely necessary