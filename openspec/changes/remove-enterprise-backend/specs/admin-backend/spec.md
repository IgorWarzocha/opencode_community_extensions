## REMOVED Requirements

### Requirement: Enterprise Admin Platform

Remove enterprise-grade admin platform capabilities (analytics, deep monitoring, multi-session control, audit/compliance logging, platform configuration, feature flags, compatibility matrix, usage analytics, load-testing hooks).

#### Scenario: Admin platform simplified

- **WHEN** admin users operate the backend
- **THEN** no enterprise analytics, audit trails, session monitoring, or platform-wide configuration/feature-flag surfaces are present
- **AND** only essential CRUD for extensions/authors/reviews/taxonomy remains

## ADDED Requirements

### Requirement: Minimal Admin Backend

Provide only the capabilities needed to manage an extensions directory with a small admin/mod team. The backend SHALL remain minimal and MUST exclude enterprise analytics, monitoring, and audit controls.

#### Scenario: Admin CRUD only

- **WHEN** admins manage extensions, authors, reviews, and taxonomy
- **THEN** they can create/read/update/delete these records and moderate submissions/reviews
- **AND** no behavioral analytics, usage tracking, or audit logging is collected

#### Scenario: Minimal authentication

- **WHEN** an admin signs in
- **THEN** authentication uses a single lightweight mechanism (e.g., shared admin token or single provider)
- **AND** no session concurrency controls, session monitoring, or emergency invalidation exists

#### Scenario: No third-party integrations

- **WHEN** backend code runs
- **THEN** it does not call third-party services for analytics, logging, notifications, or monitoring
- **AND** only internal data access/mutations are used
