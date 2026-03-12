import { Hono } from "hono";
import { MODEL_CATALOG } from "@app/shared";
import { authMiddleware } from "../middleware/auth";

const app = new Hono();

app.use("/*", authMiddleware);

app.get("/", (c) => {
  return c.json({ models: MODEL_CATALOG });
});

export default app;
