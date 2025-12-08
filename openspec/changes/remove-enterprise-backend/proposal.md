# Change: Remove enterprise-grade backend complexity

## Why

- Current backend includes heavy session management, analytics, audit logging, and third-party hooks unnecessary for a small admin-only extensions directory.
- Complexity increases maintenance and risk without delivering value to a handful of admins/moderators.

## What Changes

- Strip enterprise auth/session layers to a minimal admin-only authentication flow.
- Remove analytics, behavioral logging, and activity monitoring features.
- Remove third-party integrations/calls; keep only internal CRUD for extensions/authors/reviews/taxonomy.
- Preserve essential admin CRUD and review workflows; keep only basic error logging.

## Impact

- Affected specs: admin-backend
- Affected code: Convex backend auth/session modules, analytics/audit modules, related middleware, third-party integration points
