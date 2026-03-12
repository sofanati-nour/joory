/**
 * Validates required environment variables at process startup.
 * Import this module BEFORE any lib that consumes env vars.
 */

const REQUIRED_VARS = [
  "DATABASE_URL",
  "BETTER_AUTH_SECRET",
  "OPENROUTER_API_KEY",
] as const;

for (const key of REQUIRED_VARS) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

if (process.env.NODE_ENV === "production") {
  const authUrl = process.env.BETTER_AUTH_URL;
  if (authUrl && !authUrl.startsWith("https://")) {
    throw new Error("BETTER_AUTH_URL must use HTTPS in production");
  }

  if (!process.env.ALLOWED_ORIGINS) {
    process.stderr.write(
      "WARNING: ALLOWED_ORIGINS is not set in production — all cross-origin requests will be blocked.\n"
    );
  }
}

export {};
