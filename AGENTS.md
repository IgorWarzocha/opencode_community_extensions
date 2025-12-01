# Development Guide

## Commands

```bash
npm run dev          # Start frontend + backend
npm run build        # Production build
npm run lint         # Type check + build validation
```

## Code Style

### Imports & Types

- Use `import type` for type-only imports (`verbatimModuleSyntax`)
- Import Convex types: `import type { Doc } from "../convex/_generated/dataModel"`
- Use `@/*` path alias for src imports

### React 19.2

- Default: Server Components (no 'use client' needed)
- Add 'use client' for interactivity/hooks
- Use `useQuery`/`useMutation` for Convex data
- Forms: `useActionState` + `useFormStatus`

### Convex Functions

- Always use object syntax with args/returns validators
- Use `v.id("tableName")` for IDs, never strings
- Queries: use `withIndex()`, avoid `.filter()`
- Actions: no `ctx.db` access, use `ctx.runMutation`

### TypeScript 5.9+

- Strict mode enabled: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
- Use `unknown` instead of `any`
- Define arrays as `const arr: Array<T> = [...]`
- Define records as `const obj: Record<K, V> = {...}`

### Error Handling

- Use `toast.error()`/`toast.success()` from sonner
- Throw descriptive errors in Convex functions
