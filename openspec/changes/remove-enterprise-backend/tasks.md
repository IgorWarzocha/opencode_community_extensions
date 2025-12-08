## 1. Simplification Plan

- [ ] 1.1 Remove enterprise auth/session modules and middleware (concurrency, monitoring, emergency invalidation)
- [ ] 1.2 Remove analytics/audit/monitoring/logging beyond basic errors
- [ ] 1.3 Remove third-party integrations/hooks and load-testing harness
- [ ] 1.4 Preserve minimal admin CRUD for extensions/authors/reviews/taxonomy with lightweight auth

## 2. Implementation

- [ ] 2.1 Delete/disable Convex functions for enterprise auth/session/analytics/audit
- [ ] 2.2 Prune frontend admin UI to minimal CRUD (remove analytics/monitoring/audit views)
- [ ] 2.3 Simplify admin auth flow to single lightweight mechanism; drop permissions matrix
- [ ] 2.4 Remove third-party calls from backend and shared libs (monitoring/backup notifications)
- [ ] 2.5 Clean tests to match minimal surface

## 3. Validation

- [ ] 3.1 openspec validate remove-enterprise-backend --strict
- [ ] 3.2 npm run lint
- [ ] 3.3 Minimal manual walkthrough: admin CRUD paths (extensions/authors/reviews/taxonomy)
