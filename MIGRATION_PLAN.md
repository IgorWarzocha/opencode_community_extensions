# Database Migration Plan

## Overview

This document outlines the complete migration from the simple plugin schema to the comprehensive OpenCode Extensions Directory schema.

## Current vs New Schema Comparison

### Current Schema (Simple)

- **1 table**: `plugins` with 14 fields
- **Basic categorization**: 5 categories only
- **Limited compatibility**: 5 options only
- **No user content**: No reviews, ratings, or analytics
- **No author management**: Simple author name field only

### New Schema (Comprehensive)

- **11 tables**: extensions, authors, reviews, compatibility, dependencies, analytics, trending, submissions, userFavorites, userActivity, categories, tags
- **Rich categorization**: 10 categories + 7 extension types
- **Enhanced compatibility**: 8 compatibility options + 8 installation methods
- **Full user ecosystem**: Reviews, ratings, favorites, analytics
- **Author profiles**: Complete author management with verification

## Migration Steps

### Phase 1: Schema Deployment

1. Deploy new modular schema files
2. Run Convex codegen to update types
3. Update frontend imports and types

### Phase 2: Data Migration

1. Create migration script to transform existing data
2. Map old categories to new schema
3. Create author records from existing data
4. Populate new fields with defaults

### Phase 3: Frontend Updates

1. Update components to use new schema
2. Implement new features (reviews, analytics)
3. Update forms and validation
4. Add new filtering and search

### Phase 4: Content Population

1. Import 23 identified OpenCode extensions
2. Populate author profiles
3. Set up categories and tags
4. Configure compatibility matrices

## Data Mapping

### Category Mapping

```
Old → New
"LSP" → "LSP"
"RAG/Search" → "RAG/Search"
"DevOps" → "DevOps"
"UI" → "UI"
"Workflow" → "Workflow"
```

### New Categories Added

- "Plugin" - Core OpenCode plugins
- "Theme" - Themes and UI customizations
- "Integration" - Editor integrations
- "Tool" - Development tools
- "Interface" - Web/mobile interfaces

### Extension Types

- "plugin" - Core functionality plugins
- "integration" - Editor/IDE integrations
- "theme" - Visual themes
- "tool" - Development tools
- "interface" - Web/mobile interfaces
- "sdk" - Software development kits
- "framework" - Development frameworks

### Compatibility Expansion

```
Old: tui, cli, ide, server, zen
New: tui, cli, ide, server, zen, web, mobile, desktop
```

## Implementation Timeline

**Week 1**: Schema deployment and type generation
**Week 2**: Data migration and testing
**Week 3**: Frontend component updates
**Week 4**: New features and content population

## Rollback Plan

1. Backup current data before migration
2. Keep old schema files for reference
3. Test migration in development environment first
4. Monitor for issues after deployment

## Success Metrics

- All existing plugins successfully migrated
- New schema deployed without errors
- Frontend fully functional with new features
- 23 OpenCode extensions successfully imported
- User adoption of new features (reviews, favorites)
