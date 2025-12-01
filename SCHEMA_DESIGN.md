# OpenCode Extensions Directory - Comprehensive Schema Design

## Overview

This document describes the redesigned Convex database schema for the OpenCode extensions directory, supporting 23+ extensions with proper categorization, search, version management, user content, and analytics.

## Architecture Principles

- **Modular Design**: Schema split into focused, single-responsibility files
- **Type Safety**: Comprehensive validators using `convex/values`
- **Performance**: Optimized indexes for common query patterns
- **Scalability**: Designed for growth and complex relationships
- **Maintainability**: Clear separation of concerns and documentation

## Schema Modules

### 1. Core Extensions (`schema/extensions.ts`)

**Purpose**: Main extension entity with comprehensive metadata

**Key Features**:

- Enhanced categorization (10 categories vs 5 previously)
- Extension types (plugin, integration, theme, tool, etc.)
- Expanded compatibility matrix (8 platforms vs 5)
- GitHub integration (stars, forks, issues, commits)
- Version management and release tracking
- Installation methods and package management
- Media assets and licensing
- SEO optimization fields

**Indexes**: 12 optimized indexes for performance

### 2. Authors (`schema/authors.ts`)

**Purpose**: Author profiles with verification and social integration

**Key Features**:

- Profile information and bio
- Verification methods (GitHub, email, manual)
- Social media links
- Company and role information
- Status management (active, inactive, suspended)

**Indexes**: 4 indexes for user discovery

### 3. Reviews (`schema/reviews.ts`)

**Purpose**: User-generated content with moderation

**Key Features**:

- 1-5 star rating system
- Helpful/not helpful voting
- Moderation workflow
- Author response capability
- Version-specific reviews

**Indexes**: 5 indexes for content discovery

### 4. Compatibility & Dependencies (`schema/compatibility.ts`)

**Purpose**: Platform compatibility and dependency management

**Key Features**:

- Platform-specific compatibility matrix
- Version constraints and testing
- Dependency types (required, optional, recommended)
- Semver version constraints
- Testing metadata

**Indexes**: 8 indexes for relationship queries

### 5. Analytics (`schema/analytics.ts`)

**Purpose**: Usage statistics and trending calculations

**Key Features**:

- Time-based analytics (daily, weekly, monthly)
- Download and installation metrics
- Geographic and platform distribution
- Version breakdown analytics
- Trending scores and rankings

**Indexes**: 10 indexes for analytics queries

### 6. Workflow (`schema/workflow.ts`)

**Purpose**: Submission workflow and user engagement

**Key Features**:

- Extension submission workflow
- Review and moderation process
- User favorites and bookmarks
- Activity tracking (views, downloads, installs)
- Engagement metrics

**Indexes**: 15 indexes for workflow operations

### 7. Taxonomy (`schema/taxonomy.ts`)

**Purpose**: Categories and tags management

**Key Features**:

- Hierarchical categories
- Tag management with usage statistics
- SEO optimization
- Related tags system

**Indexes**: 8 indexes for taxonomy queries

## Key Improvements Over Previous Schema

### Enhanced Categorization

- **Before**: 5 basic categories (LSP, RAG/Search, DevOps, UI, Workflow)
- **After**: 10 comprehensive categories including Plugin, Theme, Integration, Tool, Interface

### Expanded Compatibility

- **Before**: 5 platforms (tui, cli, ide, server, zen)
- **After**: 8 platforms adding web, mobile, desktop

### Extension Types

- **Before**: No extension type distinction
- **After**: 7 types (plugin, integration, theme, tool, interface, sdk, framework)

### GitHub Integration

- **Before**: Basic author GitHub link
- **After**: Full GitHub integration (stars, forks, issues, last commit)

### Version Management

- **Before**: Single version field
- **After**: Version tracking with latest, release date, last updated

### Installation Methods

- **Before**: No installation method tracking
- **After**: 8 installation methods with commands and guides

### User Content

- **Before**: No user-generated content
- **After**: Reviews, ratings, favorites, activity tracking

### Analytics

- **Before**: No analytics capability
- **After**: Comprehensive analytics with trending

### Workflow Management

- **Before**: No submission workflow
- **After**: Full submission and moderation workflow

## Migration Strategy

### Phase 1: Core Migration

1. Update schema.ts with new modular structure
2. Migrate existing plugins to extensions table
3. Create author records from existing author data
4. Update categories and tags

### Phase 2: Feature Enhancement

1. Add GitHub integration data
2. Implement review system
3. Set up analytics tracking
4. Create submission workflow

### Phase 3: Advanced Features

1. Implement compatibility matrix
2. Add dependency management
3. Set up trending calculations
4. Enable user activity tracking

## Performance Considerations

### Index Optimization

- All indexes designed for common query patterns
- Composite indexes for multi-field queries
- Time-based indexes for analytics
- Relationship indexes for joins

### Query Patterns

- Category-based browsing: `by_category_status`
- Extension discovery: `by_extension_type_status`
- Trending queries: `by_period_rank`
- User activity: `by_user_extension`
- Search optimization: planned search indexes

### Scalability

- Modular schema allows independent scaling
- Analytics tables designed for high write volume
- User activity tables optimized for time-series data
- Relationship tables support complex queries

## Data Validation

### Type Safety

- All fields use proper `convex/values` validators
- Union types for constrained values
- Optional fields properly marked
- ID relationships enforced

### Business Logic

- Status workflows enforced through union types
- Rating constraints (1-5 stars)
- Version format validation
- URL format validation where applicable

## Next Steps

1. **Schema Deployment**: Update Convex with new schema
2. **Data Migration**: Migrate existing data to new structure
3. **Function Updates**: Update Convex functions to use new schema
4. **Frontend Integration**: Update React components for new features
5. **Testing**: Comprehensive testing of all new functionality

This comprehensive schema design provides a solid foundation for the OpenCode extensions directory, supporting all 23+ identified extensions with room for future growth and feature enhancement.
