# Development Guide

## Quick Start

```bash
npm run dev          # Start frontend + backend
npm run build        # Production build
npm run lint         # Type check + build validation
```

## Tech Stack

- **React 19.2** - Server Components, modern hooks, React Compiler ready
- **TypeScript 5.9+** - Strict mode, modern flags, ES2023 features
- **Tailwind CSS 4.1** - CSS-first architecture, @theme blocks
- **Convex** - Backend database with real-time sync
- **Vite** - Build tool and dev server

## Essential Best Practices

### React 19.2 Components

**Server Components** (default):

- No `'use client'` directive needed
- Use for presentational components without interactivity
- Cannot use hooks, event listeners, or browser APIs

**Client Components** (when needed):

- Add `'use client'` at very top for interactivity
- Use for components with state, effects, or event handlers
- Import React hooks and Convex hooks (`useQuery`, `useMutation`)

**Forms**:

- Use `useActionState` for form submission states
- Use `useFormStatus` for pending states in form children
- Server Actions use `'use server'` directive

### Convex Backend

**Function Pattern**:

```typescript
export const functionName = query({
  args: { param: v.optional(v.string()) },
  returns: v.array(v.any()),
  handler: async (ctx, args) => {
    return await ctx.db.query("table").collect();
  },
});
```

**Key Rules**:

- Always use explicit args/returns validators from `convex/values`
- Use `withIndex()` for queries, avoid `.filter()` on large tables
- Use `v.id("tableName")` for ID types, never raw strings
- Actions have no `ctx.db` access - use `ctx.runQuery`/`ctx.runMutation`

### Tailwind CSS 4.1

**CSS-First Architecture**:

- Use `@theme { ... }` in CSS instead of config files
- Import with `@import "tailwindcss";`
- Define tokens as CSS variables: `--color-primary: #171717;`

**Semantic Colors**:

- `text-primary`/`bg-primary` for main brand color
- `text-secondary` for muted text
- `text-accent` for interactive elements
- `border-border` for consistent borders

### TypeScript 5.9+

**Strict Flags Enabled**:

- `noUncheckedIndexedAccess: true` - Prevents undefined array/object access
- `exactOptionalPropertyTypes: true` - Stricter optional property handling
- `verbatimModuleSyntax: true` - Explicit type-only imports

**Import Patterns**:

```typescript
import type { Doc } from "../convex/_generated/dataModel";
import { api } from "../convex/_generated/api";
```

## File Structure

```
src/
├── components/          # React components
├── actions/            # Server Actions ('use server')
├── lib/               # Utility functions
└── index.css          # Tailwind CSS with @theme blocks

convex/
├── schema.ts          # Database schema and indexes
├── *.ts              # Backend functions
└── _generated/       # Auto-generated types
```

## Common Patterns

### Form Submission

```typescript
const [state, action] = useActionState(submitFunction, null);
const { pending } = useFormStatus();
```

### Data Fetching

```typescript
// Server Component
const plugins = await api.plugins.list();

// Client Component
const plugins = useQuery(api.plugins.list, filters || {});
```

### Error Handling

```typescript
import { toast } from "sonner";
toast.success("Operation completed");
toast.error("Something went wrong");
```

## Deployment

**Vercel Configuration**:

- Build command: `npx convex deploy --cmd 'npm run build'`
- Environment: `CONVEX_DEPLOY_KEY` required
- Output directory: `dist`

**Local Development**:

- Frontend: http://localhost:5173
- Convex Dashboard: http://localhost:3210
- Environment: `VITE_CONVEX_URL=http://127.0.0.1:3210`
