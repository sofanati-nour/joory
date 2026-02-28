import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import authRoutes from "./routes/auth";
import chatRoutes from "./routes/chat";
import conversationsRoutes from "./routes/conversations";
import modelsRoutes from "./routes/models";
import profileRoutes from "./routes/profile";
import subscriptionRoutes from "./routes/subscription";
import unfurlRoutes from "./routes/unfurl";

const app = new Hono();

app.use("*", logger());

app.use(
  "*",
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "http://chat.syrian.test",
      "http://joory.test",
    ],
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
