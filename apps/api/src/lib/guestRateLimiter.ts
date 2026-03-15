const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_MESSAGES = 10;

const windows = new Map<string, number[]>();

export function checkGuestRateLimit(guestId: string): { allowed: true } | { allowed: false; retryAfterMs: number } {
  const now = Date.now();
  const timestamps = windows.get(guestId) ?? [];

  // Remove entries outside the window
  const valid = timestamps.filter((t) => now - t < WINDOW_MS);

  if (valid.length >= MAX_MESSAGES) {
    const oldest = valid[0];
    const retryAfterMs = WINDOW_MS - (now - oldest);
    windows.set(guestId, valid);
    return { allowed: false, retryAfterMs };
  }

  valid.push(now);
  windows.set(guestId, valid);
  return { allowed: true };
}

// Periodic cleanup every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of windows) {
    const valid = timestamps.filter((t) => now - t < WINDOW_MS);
    if (valid.length === 0) {
      windows.delete(key);
    } else {
      windows.set(key, valid);
    }
  }
}, 5 * 60 * 1000);
