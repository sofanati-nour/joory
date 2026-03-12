import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL!

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const client = postgres(connectionString, {
  max: 25,          // connection pool size
  idle_timeout: 30, // release idle connections after 30s
})

export const db = drizzle(client, { schema })

export type Database = typeof db
