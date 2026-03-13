# ============================================================
# Joory — Multi-stage Dockerfile (Bun runtime)
# Usage:
#   docker compose build
#   docker compose up -d
# ============================================================

# ---------- base ----------
FROM oven/bun:1.3.9-alpine AS base
WORKDIR /app

# ---------- deps — install ALL workspace dependencies ----------
FROM base AS deps
COPY bun.lock package.json turbo.json tsconfig.json ./
COPY apps/api/package.json ./apps/api/package.json
COPY apps/web/package.json ./apps/web/package.json
COPY packages/shared/package.json ./packages/shared/package.json
RUN bun install --frozen-lockfile

# ---------- source — copy everything on top of deps ----------
FROM deps AS source
COPY packages/shared ./packages/shared
COPY apps/api ./apps/api
COPY apps/web ./apps/web

# ---------- build-web — SvelteKit build (svelte-adapter-bun) ----------
FROM source AS build-web
ARG PUBLIC_API_BASE
ENV PUBLIC_API_BASE=${PUBLIC_API_BASE:-__PLACEHOLDER__}
WORKDIR /app/apps/web
RUN bun --bun run build

# ---------- web — production runner ----------
FROM base AS web
WORKDIR /app

# Copy the minimal set needed to run
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=deps /app/packages/shared ./packages/shared
COPY --from=build-web /app/apps/web/build ./apps/web/build
COPY --from=build-web /app/apps/web/package.json ./apps/web/package.json

ENV NODE_ENV=production
EXPOSE 3000
CMD ["bun", "./apps/web/build/index.js"]

# ---------- api — production runner (no build step needed) ----------
FROM base AS api
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=source /app/packages/shared ./packages/shared
COPY --from=source /app/apps/api ./apps/api

ENV NODE_ENV=production
EXPOSE 3001
# Run Drizzle migrations then start the API
CMD cd apps/api && bun run db:migrate && cd /app && bun ./apps/api/src/index.ts
