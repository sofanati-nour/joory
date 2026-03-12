/**
 * Structured JSON logger.
 * - Logs to stdout (info/debug) or stderr (warn/error).
 * - In production, stack traces are suppressed to avoid leaking internals.
 * - Never log sensitive values (tokens, passwords, full error stacks) in prod.
 */

const isDev = process.env.NODE_ENV !== "production";

type Meta = Record<string, unknown>;

function write(level: string, message: string, meta?: Meta): void {
  const entry = JSON.stringify({
    ts: new Date().toISOString(),
    level,
    message,
    ...meta,
  });
  if (level === "error" || level === "warn") {
    process.stderr.write(entry + "\n");
  } else {
    process.stdout.write(entry + "\n");
  }
}

export const logger = {
  info(message: string, meta?: Meta): void {
    write("info", message, meta);
  },

  warn(message: string, meta?: Meta): void {
    write("warn", message, meta);
  },

  debug(message: string, meta?: Meta): void {
    if (isDev) write("debug", message, meta);
  },

  /**
   * Log an error. Stack traces are included in development only.
   * Never pass user-controlled data as `err` — use `meta` for context.
   */
  error(message: string, err?: unknown, meta?: Meta): void {
    const errFields: Meta = {};
    if (err instanceof Error) {
      errFields.errorMessage = err.message;
      if (isDev) errFields.stack = err.stack;
    } else if (err !== undefined) {
      errFields.errorMessage = String(err);
    }
    write("error", message, { ...errFields, ...meta });
  },
};
