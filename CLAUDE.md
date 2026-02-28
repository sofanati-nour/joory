# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Joory is a full-stack AI chat platform supporting 20+ models from multiple providers (Claude, GPT, Gemini, Llama, DeepSeek, Grok, Mistral, Qwen) via OpenRouter. It is a Bun monorepo with a SvelteKit 5 frontend and a Hono backend.

## Monorepo Structure

```
joory-rewrite/
├── apps/
│   ├── web/       # SvelteKit 5 frontend (@app/web)
│   └── api/       # Hono backend (@app/api)
└── packages/
    └── shared/    # Zod schemas, TypeScript types, model catalog (@app/shared)
```

**Package manager:** Always use `bun`. Never use `npm`, `pnpm`, or `yarn`.

## Common Commands

Run all commands from within the relevant workspace directory.

### Web (`apps/web/`)
```bash
bun run dev          # Start Vite dev server
bun run build        # Production build
bun run check        # Type-check (svelte-check + tsc)
bun run check:watch  # Watch mode type checking
bun run lint         # Check formatting and run ESLint
bun run format       # Auto-format with Prettier
```

### API (`apps/api/`)
```bash
bun run dev          # Hot-reload dev server (bun --hot)
```

There is no dedicated test runner configured yet.

## Architecture

### `@app/shared` — Source of truth for data contracts

All Zod schemas live here and are imported by both the web and API apps. Types are inferred from schemas with `z.infer<typeof FooSchema>`. Do not duplicate type definitions — always import from `@app/shared`.

Key schemas: `chat.ts` (Message, Conversation, ChatRequest with branching), `user.ts` (UserProfile, UserPreferences), `models.ts` (Model capabilities/tiers), `billing.ts` (Subscription, UsageStatus).

Model constants in `packages/shared/src/constants/models.ts` define the full `MODEL_CATALOG` with pricing, tiers (Ultra/Premium/Mid/Cheap/Free), and capability flags (image support, PDF support, tool use).

### `@app/web` — SvelteKit 5 Frontend

- **Routing:** File-based SvelteKit routes. Main chat is at `routes/chat/[[id]]/` (optional dynamic ID for conversation).
- **Stores:** Svelte 5 reactive stores (`.svelte.ts` files) in `src/lib/stores/` manage chat state, user info, model selection, input, and locale.
- **UI Components:** shadcn-svelte primitives in `src/lib/components/ui/`; domain components alongside them.
- **Styling:** Tailwind CSS v4 via Vite plugin. Base color: slate.
- **i18n:** `svelte-i18n` is set up for multi-language support.
- **Auth:** Better Auth 1.4.18 client-side integration.
- **Svelte 5 experimental async** is enabled in `svelte.config.js`.

Allowed dev hosts: `chat.syrian.test`, `joory.test` (configured in `vite.config.ts`).

### `@app/api` — Hono Backend (early scaffold)

The API is currently a scaffold. The intended structure (from `structure.md`) is:
- `src/routes/chat.ts` — `POST /api/chat` streaming via AI SDK + OpenRouter
- `src/routes/conversations.ts` — CRUD for conversation history
- `src/routes/models.ts` — `GET /api/models`
- `src/routes/auth.ts` — Better Auth handler
- `src/middleware/auth.ts` — Session validation
- `src/db/` — Drizzle ORM client, schema (importing from `@app/shared`), and migrations
- `src/lib/openrouter.ts` — AI SDK + OpenRouter provider setup
- `src/lib/auth.ts` — Better Auth server config

## Model Data Flow

`@app/shared` → `MODEL_CATALOG` is the **only** source of model data. The frontend imports it directly — there is no separate `allowed.ts`, `models.ts` wrapper, or `data/models.json`. The models store (`stores/models.ts`) seeds its writable store with `MODEL_CATALOG`. The `Model` type is always imported from `@app/shared`, never defined locally.

## Key Conventions

- **TypeScript strict mode** is on everywhere. Prefer `z.infer` types over manual interface declarations.
- **Zod-first:** Define schemas in `@app/shared`, infer types, import types in consuming apps.
- **Conversation branching:** Messages carry `BranchInfo` (sibling list + navigation). Preserve this when touching chat logic.
- **Model tiers:** Models are categorized by tier. Use the `MODEL_CATALOG` constants rather than hardcoding model IDs.
- The API uses `hono/jsx` for JSX (`jsxImportSource: "hono/jsx"` in `apps/api/tsconfig.json`).
