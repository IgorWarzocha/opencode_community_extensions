# Agent Operations Guide

## Available Documentation

This repository includes comprehensive technology-specific documentation files:

- **TS59.MD** - Complete TypeScript 5.9+ reference with modern patterns, configuration, and best practices
- **TAILWIND4.md** - Tailwind CSS 4.1 specification with CSS-first architecture, v4.1 features, and migration guidance
- **CONVEX.md** - Convex database and server functions guide with schema design, function patterns, and performance rules
- **REACT19.md** - React 19+ reference covering Server Components, Actions, React Compiler, and modern hooks

**Agent Usage**: Consult these files for detailed implementation guidance when working with respective technologies. They contain authoritative patterns and rules for this codebase.

## Build/Lint/Test Commands

- `npm run dev` - Start frontend and backend in parallel
- `npm run dev:frontend` - Start Vite frontend only
- `npm run dev:backend` - Start Convex backend only
- `npm run build` - Build for production
- `npm run lint` - Type check both frontend and Convex code, then build

## Code Style Guidelines

### Convex Functions

- ALWAYS use new function syntax with explicit args/returns validators from `convex/values`
- Use `query`/`mutation`/`action` for public functions, `internal*` for private
- Include `returns: v.null()` for functions returning null/undefined, `returns: v.object()` for objects
- Define schema in `convex/schema.ts` with proper indexes using `defineSchema`/`defineTable`
- Use `@convex-dev/auth` for authentication with ConvexAuthProvider
- Import from `./_generated/server` for function types, use `api.*`/`internal.*` references
- Use `v.id("tableName")` for ID types, never raw strings
- Use `withIndex()` for queries, avoid `.filter()` on large tables
- Actions have no `ctx.db` access - use `ctx.runQuery`/`ctx.runMutation` instead
- **Performance**: Chain indexes when possible, avoid client-side filtering of large datasets
- **Validation**: Always validate inputs server-side, even if client validation exists

### React 19 + TypeScript

#### Server vs Client Components

- **Default to Server Components**: Use async functions for data fetching, no `'use client'` needed
- **Client Components**: MUST have `'use client'` at top of file for any interactivity (state, effects, events)
- **Presentational Components**: Keep as Server Components when possible (e.g., FilterBar, SearchBar, PluginCard)

#### Data Fetching Patterns

- **Server Components**: Use `await api.function()` directly in component body
- **Client Components**: Use `useQuery(api.function)` for reactive data
- **Request Deduplication**: Use `cache` from React in Server Components
- **Loading States**: `query === undefined` for loading, `query.length === 0` for empty

#### Form Handling (React 19.2 Requirements)

- **Use `useActionState`**: Replace manual `useState` for form submission states
- **Use `useFormStatus`**: Inside form children for pending/loading states
- **Use `useOptimistic`**: For immediate UI updates during mutations
- **Server Actions**: Mark functions with `'use server'` directive

#### Modern Hook Patterns

- **Context**: Use `use(context)` instead of `useContext(context)`
- **Effects**: Use `useEffectEvent` to isolate non-reactive logic inside effects
- **Performance**: Avoid manual `useMemo`/`useCallback` - React Compiler handles optimization
- **State Preservation**: Use `<Activity mode="hidden">` instead of CSS hiding

#### Component Patterns

- **Props**: Accept `ref` as standard prop instead of using `forwardRef`
- **Imports**: Use `@/*` path alias, import Convex functions via `api` from `../convex/_generated/api`
- **Types**: Use `Doc<"tableName">` types from Convex for type-safe data props
- **Authentication**: Use `useAuthActions` from `@convex-dev/auth/react`
- **Error Handling**: Use toast notifications (`toast.error`/`toast.success`)

#### Migration Rules

- **Remove `useEffect` data fetching**: Move to Server Components
- **Replace form `useState`**: Use `useActionState` pattern
- **Add `'use client'`**: To any component with hooks/event handlers
- **Use `cache()`**: For expensive operations in Server Components

### Styling & UI (Tailwind CSS 4.1)

#### CSS-First Architecture

- **Configuration**: Use `@theme { ... }` in CSS instead of `tailwind.config.js`
- **Import Pattern**: Use `@import "tailwindcss";` instead of `@tailwind base/components/utilities`
- **Design Tokens**: Define tokens as CSS variables: `--color-brand-500: oklch(0.72 0.14 250);`
- **Build Setup**: Use `@tailwindcss/vite` plugin for Vite integration

#### v4.1 Features

- **Text Shadows**: `text-shadow-sm`, `text-shadow-blue-500/20`, `text-shadow-lg/50`
- **Masks**: `mask-linear`, `mask-to-b`, `mask-radial`, `mask-at-c`
- **Container Queries**: `@container` on parent, `@md:flex-row` on children
- **Form Validation**: `user-valid:*` and `user-invalid:*` for interaction-based validation
- **3D Transforms**: `rotate-x-*`, `perspective-*`, `transform-3d`
- **Safe Alignment**: `justify-safe-center`, `align-safe-center`
- **Overflow Wrap**: `wrap-anywhere` for aggressive text wrapping

#### Component Patterns

- **IBM Plex Mono**: Font loaded from Google Fonts, defined in `@theme` block
- **Toast Notifications**: Use Sonner (`<Toaster />` in App.tsx)
- **Responsive Design**: Use container queries (`@container`) over media queries where appropriate
- **Custom Utilities**: Use `@utility` directive instead of `@apply` for reusable patterns
- **Custom Variants**: Use `@custom-variant` for state-based styling

#### Migration from v3

- **Replace Config**: Move `tailwind.config.js` values to `@theme` block in CSS
- **Update Imports**: Change `@tailwind` directives to `@import "tailwindcss";`
- **Token Usage**: Use `bg-(--color-brand)` instead of theme function calls
- **Class Detection**: Ensure all class names exist as complete strings (no concatenation)

### TypeScript Configuration

- **Target**: Upgrade to TypeScript 5.9+ for latest features and stricter checking
- **Strict Mode**: Enabled across frontend and Convex code (maintain `strict: true`)
- **Modern Flags**: Add `verbatimModuleSyntax: true`, `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`
- **Module Resolution**: Bundler mode for Vite, Node20 for Convex functions
- **Target/Lib**: Use ES2023/ESNext for modern features, DOM lib for frontend
- **Path Aliases**: Maintain `@/*` mapping for clean imports
- **Project References**: Current structure with separate configs is optimal

### TypeScript 5.9+ Best Practices

#### Type System Patterns

- **Prefer `unknown` over `any`**: Use `unknown` for external data, narrow with type predicates
- **Discriminated Unions**: Use `{ kind: "success" } | { kind: "error" }` patterns for state
- **Utility Types**: Leverage `Partial<T>`, `Pick<T, K>`, `Omit<T, K>`, `Awaited<T>`
- **Template Literal Types**: Use for string patterns like `EventName = \`user:${"created" | "deleted"}\``
- **`satisfies` Operator**: Use to validate shapes without widening: `const config = { ... } as const satisfies Config`

#### Modern Module Patterns

- **Type-only imports**: Use `import type { ... }` to avoid runtime dependencies
- **`import defer`**: Use for lazy evaluation of heavy side-effect modules: `import defer * as feature from "./feature.js"`
- **ES Modules**: Prefer named exports, avoid default exports for library code
- **Explicit Extensions**: Use `.js` extensions in imports for Node compatibility

#### Advanced Features

- **Const Type Parameters**: Use `function makeMap<const K>(keys: K[])` to preserve literals
- **Explicit Resource Management**: Use `using` with `[Symbol.dispose]` for cleanup (if runtime supports)
- **Standard Decorators**: Use Stage 3 decorators instead of experimental ones
- **Control Flow Narrowing**: Use `typeof`, `instanceof`, `in` operator, and custom type predicates

#### Code Quality

- **No `any` or `!`**: Avoid non-null assertions and `any` types
- **Explicit Returns**: Add return types to public APIs, rely on inference locally
- **Parameter Properties**: Use `constructor(private readonly service: Service)` patterns
- **Readonly Fields**: Use `readonly` for immutable data
- **Override Keyword**: Use `override` when extending class methods

### Migration Checklist

#### React 19.2 Compliance

- [ ] Convert presentational components to Server Components (remove `'use client'`)
- [ ] Move data fetching from `useEffect` to Server Components
- [ ] Replace manual form `useState` with `useActionState` pattern
- [ ] Add `useFormStatus` for form pending states
- [ ] Use `useOptimistic` for optimistic UI updates
- [ ] Replace `useContext` with `use` API
- [ ] Add `useEffectEvent` for non-reactive effect logic
- [ ] Remove manual `useMemo`/`useCallback` (React Compiler handles)

#### Convex Compliance

- [ ] Add explicit `returns: v.null()` or `returns: v.object()` to all functions
- [ ] Use `withIndex()` instead of `.filter()` on large tables
- [ ] Validate all inputs with `convex/values` validators
- [ ] Use `v.id("tableName")` for ID types instead of strings

#### TypeScript 5.9+ Compliance

- [ ] Upgrade TypeScript to 5.9+ in package.json
- [ ] Add `verbatimModuleSyntax: true` to tsconfig files
- [ ] Add `noUncheckedIndexedAccess: true` for stricter array/object access
- [ ] Add `exactOptionalPropertyTypes: true` for precise optional types
- [ ] Replace `any` types with `unknown` and proper narrowing
- [ ] Use `satisfies` operator for literal type preservation
- [ ] Add explicit return types to public API functions
- [ ] Use `import type` for type-only imports
- [ ] Implement discriminated unions for state management

#### Tailwind CSS 4.1 Compliance

- [ ] Upgrade from Tailwind v3 to v4.1 in package.json
- [ ] Replace `tailwind.config.js` with `@theme` block in CSS
- [ ] Change `@tailwind` directives to `@import "tailwindcss";`
- [ ] Migrate design tokens to CSS variables in `@theme`
- [ ] Add `@tailwindcss/vite` plugin to Vite configuration
- [ ] Implement v4.1 features: text shadows, masks, container queries
- [ ] Use `user-valid:*`/`user-invalid:*` for form validation styling
- [ ] Replace `@apply` with `@utility` for custom patterns
- [ ] Ensure all class names exist as complete strings (no concatenation)
