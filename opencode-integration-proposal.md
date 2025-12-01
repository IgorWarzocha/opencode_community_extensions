# OpenCode Extensions Integration Proposal

## Executive Summary

After analyzing 47 extension files from the opencode directory, I've identified **23 genuine OpenCode extensions** that should be integrated into our database. These extensions significantly expand OpenCode's capabilities across plugins, editor integrations, themes, monitoring, and workflow tools.

## Current Schema Analysis

Our current schema supports:

- **Categories**: LSP, RAG/Search, DevOps, UI, Workflow
- **Compatibility**: tui, cli, ide, server, zen
- **Fields**: name, slug, description, features, repo/docs URLs, version, author, status

**Schema Gaps Identified:**

1. Missing "Plugin" category for core OpenCode extensions
2. Missing "Mobile" compatibility type
3. Missing "Web" compatibility type
4. No field for extension type (plugin, integration, theme, etc.)
5. No field for installation method (npm, git clone, etc.)

## Recommended Extensions for Integration

### 🔌 Core Plugins (8 extensions)

| Name                           | Category | Compatibility | Key Features                                     |
| ------------------------------ | -------- | ------------- | ------------------------------------------------ |
| Background Processes Plugin    | Workflow | server        | Process lifecycle management, long-running tasks |
| Command Blocker Plugin         | DevOps   | cli           | File access control, gitignore patterns          |
| Dynamic Context Pruning Plugin | Workflow | tui           | Token optimization, context cleanup              |
| Gemini Auth Plugin             | UI       | cli           | Google OAuth integration                         |
| Notification Plugin            | UI       | tui           | Desktop notifications                            |
| Rules Plugin                   | Workflow | cli           | Markdown rule injection                          |
| Skills Plugin                  | Workflow | cli           | Anthropic skills specification                   |
| Smart Title Plugin             | UI       | tui           | AI-powered session naming                        |

### 🔧 Editor Integrations (5 extensions)

| Name                        | Category | Compatibility | Key Features               |
| --------------------------- | -------- | ------------- | -------------------------- |
| Neovim Plugin (NickvanDyke) | IDE      | ide           | Chat interface, 1k+ stars  |
| Neovim Plugin (sudo-tee)    | IDE      | ide           | Alternative implementation |
| Emacs Integration           | IDE      | ide           | gptel compatibility        |
| VS Code Extension           | IDE      | ide           | Official extension         |
| Zed Extension               | IDE      | ide           | Official ACP support       |

### 🎨 Themes & UI (4 extensions)

| Name                      | Category | Compatibility | Key Features                 |
| ------------------------- | -------- | ------------- | ---------------------------- |
| Base16 Themes             | UI       | tui           | Complete theme collection    |
| Web Interface (bjesus)    | UI       | web           | SolidJS, real-time streaming |
| Web Interface (chris-tse) | UI       | web           | Modern chat UI               |
| Web Viewer Client         | UI       | web           | Session management           |

### 📱 Mobile & Remote (3 extensions)

| Name                  | Category | Compatibility | Key Features           |
| --------------------- | -------- | ------------- | ---------------------- |
| Mobile App (OpenMode) | UI       | mobile        | Flutter cross-platform |
| Remote Code Mobile    | UI       | mobile        | iOS/Mac apps           |
| Monitor CLI Tool      | DevOps   | cli           | Usage analytics        |

### 🔄 Workflow & Tools (3 extensions)

| Name                          | Category | Compatibility | Key Features           |
| ----------------------------- | -------- | ------------- | ---------------------- |
| Agent Framework               | Workflow | cli           | Plan-first development |
| Workflow Management (Agentic) | Workflow | cli           | Context organization   |
| AgentLink                     | Workflow | cli           | Configuration sync     |

### 📦 Package Management (1 extension)

| Name      | Category | Compatibility | Key Features      |
| --------- | -------- | ------------- | ----------------- |
| Nix Flake | DevOps   | cli           | Automated updates |

## Proposed Schema Updates

```typescript
const applicationTables = {
  plugins: defineTable({
    name: v.string(),
    slug: v.string(),
    shortDescription: v.string(),
    description: v.string(),
    category: v.union(
      v.literal("LSP"),
      v.literal("RAG/Search"),
      v.literal("DevOps"),
      v.literal("UI"),
      v.literal("Workflow"),
      v.literal("Plugin"), // NEW
      v.literal("Theme"),   // NEW
      v.literal("Integration") // NEW
    ),
    tags: v.array(v.string()),
    compatibility: v.array(
      v.union(
        v.literal("tui"),
        v.literal("cli"),
        v.literal("ide"),
        v.literal("server"),
        v.literal("zen"),
        v.literal("web"),   // NEW
        v.literal("mobile") // NEW
      )
    ),
    features: v.array(v.string()),
    repoUrl: v.string(),
    docsUrl: v.optional(v.string()),
    version: v.string(),
    authorName: v.string(),
    authorGithub: v.optional(v.string()),
    status: v.union(v.literal("draft"), v.literal("published")),
    // NEW FIELDS
    extensionType: v.union(
      v.literal("plugin"),
      v.literal("integration"),
      v.literal("theme"),
      v.literal("tool"),
      v.literal("interface")
    ),
    installationMethod: v.union(
      v.literal("npm"),
      v.literal("git"),
      v.literal("marketplace"),
      v.literal("manual"),
      v.literal("flake")
    ),
    stars: v.optional(v.number()), // For GitHub stars
    lastUpdated: v.optional(v.string()) // ISO date
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_status", ["status"])
    .index("by_extension_type", ["extensionType"]) // NEW
    .index("by_compatibility", ["compatibility"]); // NEW
};
```

## Integration Strategy

### Phase 1: Core Extensions (Priority)

1. **Plugin System Extensions** - Highest user value
2. **Editor Integrations** - Large user bases
3. **Authentication Plugins** - Essential functionality

### Phase 2: UI & Themes

1. **Web Interfaces** - Alternative interaction methods
2. **Themes** - Personalization options
3. **Mobile Apps** - Remote access

### Phase 3: Advanced Tools

1. **Workflow Management** - Power user features
2. **Monitoring Tools** - Analytics and optimization
3. **Package Management** - Platform-specific integrations

## Data Migration Plan

### Step 1: Schema Migration

- Add new fields with default values for existing entries
- Create new indexes for better query performance
- Run data validation to ensure integrity

### Step 2: Content Population

- Extract structured data from markdown files
- Normalize GitHub repository information
- Fetch star counts and last updated dates
- Generate slugs and validate URLs

### Step 3: Quality Assurance

- Manual review of all 23 extensions
- Test installation methods where possible
- Verify compatibility information
- Ensure consistent categorization

## Excluded Items (Out of Scope)

### SDKs (2 items)

- Python SDK, Go SDK - These are for integrating OpenCode INTO other applications

### Documentation (8 items)

- Configuration guides, tutorials, documentation links
- Community resources (Discord, awesome lists)
- Generic MCP server documentation

### Universal Tools (3 items)

- OpenSkills Universal Loader - Works across multiple AI tools
- Vercel Coding Agent Template - Multi-platform template
- AgentLink - Already covered in workflow tools

### Non-OpenCode Specific (11 items)

- Migration guides, YouTube tutorials, GitHub repo links
- Generic MCP tools, configuration examples

## Implementation Timeline

**Week 1**: Schema migration and data extraction
**Week 2**: Core extensions integration (plugins, editor integrations)
**Week 3**: UI themes and web interfaces
**Week 4**: Mobile apps, workflow tools, and QA

## Success Metrics

- **23 extensions** successfully integrated
- **100% data accuracy** in repository information
- **Zero duplicate entries** across categories
- **Complete compatibility matrix** for all extensions
- **User-friendly search and filtering** by new categories

This integration will establish our database as the most comprehensive resource for OpenCode extensions, significantly enhancing user discovery and adoption of the growing OpenCode ecosystem.
