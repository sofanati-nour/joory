your-app/
├── package.json              # Workspace root
├── bun.lock
├── turbo.json                # Turborepo config (optional but recommended)
├── docker-compose.yml
├── Caddyfile
├── .env
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── apps/
│   ├── web/                  # SvelteKit frontend
│   │   ├── package.json      # "name": "@app/web"
│   │   └── ...
│   │
│   └── api/                  # Hono backend
│       ├── package.json      # "name": "@app/api"
│       ├── Dockerfile
│       └── src/
│           ├── index.ts            # Hono app entry, Bun.serve()
│           ├── routes/
│           │   ├── chat.ts         # POST /api/chat — streamText via OpenRouter
│           │   ├── conversations.ts # CRUD for conversation history
│           │   ├── models.ts       # GET /api/models — available models
│           │   └── auth.ts         # Better Auth route handler
│           ├── middleware/
│           │   ├── auth.ts         # Session validation middleware
│           │   └── rateLimit.ts
│           ├── db/
│           │   ├── index.ts        # Drizzle client
│           │   ├── schema.ts       # Drizzle schema (imports from @app/shared)
│           │   └── migrations/
│           └── lib/
│               ├── openrouter.ts   # AI SDK + OpenRouter provider setup
│               └── auth.ts         # Better Auth server config
│
└── packages/
    └── shared/               # Shared types, schemas, constants
        ├── package.json      # "name": "@app/shared"
        └── src/
            ├── index.ts            # Re-exports everything
            ├── schemas/
            │   ├── chat.ts         # Zod: Message, Conversation, ChatRequest
            │   ├── user.ts         # Zod: User, Session, Preferences
            │   └── models.ts       # Zod: Model, ModelProvider, ModelConfig
            ├── types/
            │   └── index.ts        # Inferred types: z.infer<typeof MessageSchema>
            └── constants/
                └── models.ts       # Model IDs, display names, capabilities