import "./lib/env"; // validate env vars before anything else

import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import authRoutes from "./routes/auth";
import chatRoutes from "./routes/chat";
import conversationsRoutes from "./routes/conversations";
import modelsRoutes from "./routes/models";
import profileRoutes from "./routes/profile";
import subscriptionRoutes from "./routes/subscription";
import unfurlRoutes from "./routes/unfurl";

function getAllowedOrigins(): string[] {
  if (process.env.ALLOWED_ORIGINS) {
    return process.env.ALLOWED_ORIGINS.split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }
  // Fall back to localhost only outside production
  if (process.env.NODE_ENV !== "production") {
    return ["http://localhost:5173", "http://localhost:4173"];
  }
  return [];
}

const app = new Hono();

app.use("*", logger());

// Allow larger payloads on chat routes (file attachments up to ~50 MB).
app.use(
  "/api/chat*",
  bodyLimit({
    maxSize: 50 * 1024 * 1024, // 50 MB
    onError: (c) => c.json({ error: "Request body too large" }, 413),
  })
);

// Reject request bodies larger than 1 MB on all other routes.
app.use(
  "*",
  bodyLimit({
    maxSize: 1 * 1024 * 1024, // 1 MB
    onError: (c) => c.json({ error: "Request body too large" }, 413),
  })
);

// Security headers on every response
app.use("*", async (c, next) => {
  await next();
  c.header("X-Content-Type-Options", "nosniff");
  c.header("X-Frame-Options", "DENY");
  // Disable the legacy XSS auditor — it can itself be abused
  c.header("X-XSS-Protection", "0");
  c.header("Referrer-Policy", "strict-origin-when-cross-origin");
  c.header("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  if (process.env.NODE_ENV === "production") {
    c.header(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains"
    );
  }
});

app.use(
  "*",
  cors({
    origin: getAllowedOrigins(),
    credentials: true,
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["X-Chat-Id", "x-usage-remaining", "x-usage-capacity"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.route("/api/auth", authRoutes);
app.route("/api/chat", chatRoutes);
app.route("/api/chats", conversationsRoutes);
app.route("/api/models", modelsRoutes);
app.route("/api/profile", profileRoutes);
app.route("/api/subscription", subscriptionRoutes);
app.route("/api/unfurl", unfurlRoutes);

app.get("/", (c) => c.text("Joory API"));

app.notFound((c) => c.json({ error: "Not Found" }, 404));

export default {
  port: Number(process.env.PORT) || 3001,
  fetch: app.fetch,
  idleTimeout: 0,
};
