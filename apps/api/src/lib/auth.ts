import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";

const isProduction = process.env.NODE_ENV === "production";

function getAllowedOrigins(): string[] {
  if (process.env.ALLOWED_ORIGINS) {
    return process.env.ALLOWED_ORIGINS.split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (!isProduction) {
    return ["http://localhost:5173", "http://localhost:4173", "http://localhost:3001", "https://joory.test","https://api.joory.test"];
  }
  return ["https://joory.chat"];
}

// Only enable Google OAuth when both credentials are explicitly provided
const googleProvider =
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
      }
    : undefined;

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3001",
  basePath: "/api/auth",
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  ...(googleProvider && { socialProviders: googleProvider }),
  secret: process.env.BETTER_AUTH_SECRET!,
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24, // re-issue session token once per day
  },
  trustedOrigins: getAllowedOrigins(),
  advanced: {
    cookiePrefix: "joory",
    // Enable cross-subdomain cookies so SvelteKit can read the session
    crossSubDomainCookies: {
      enabled: true,
    },
    defaultCookieAttributes: {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      domain: isProduction ? ".joory.chat" : '.joory.test',
    },
  },
});

export type Auth = typeof auth;
