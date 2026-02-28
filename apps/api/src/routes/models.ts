import { Hono } from "hono";
import { MODEL_CATALOG } from "@app/shared";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ models: MODEL_CATALOG });
});

export default app;
