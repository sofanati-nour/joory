import { Hono } from "hono";
import { z } from "zod";
import { authMiddleware, type UserWithTier } from "../middleware/auth";
import { db } from "../db";
import { conversations } from "../db/schema";
import { eq, and, desc } from "drizzle-orm";

type Env = {
  Variables: {
    user: UserWithTier;
  };
};

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isValidUUID(id: string): boolean {
  return UUID_RE.test(id);
}

const pinSchema = z.object({
  is_pinned: z.boolean(),
});

const app = new Hono<Env>();

app.use("/*", authMiddleware);

app.post("/", async (c) => {
  const user = c.get("user");

  const allConversations = await db.query.conversations.findMany({
    where: and(
      eq(conversations.userId, user.id),
      eq(conversations.isArchived, false)
    ),
    orderBy: [desc(conversations.isPinned), desc(conversations.updatedAt)],
    columns: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      isPinned: true,
    },
  });

  return c.json(
    allConversations.map((c) => ({
      id: c.id,
      title: c.title,
      created_at: c.createdAt,
      updated_at: c.updatedAt,
      is_pinned: c.isPinned,
    }))
  );
});

app.delete("/:id", async (c) => {
  const user = c.get("user");
  const conversationId = c.req.param("id");

  if (!isValidUUID(conversationId)) {
    return c.json({ error: "Invalid conversation ID" }, 400);
  }

  const conversation = await db.query.conversations.findFirst({
    where: and(
      eq(conversations.id, conversationId),
      eq(conversations.userId, user.id)
    ),
  });

  if (!conversation) {
    return c.json({ error: "Conversation not found" }, 404);
  }

  await db
    .update(conversations)
    .set({ isArchived: true, updatedAt: new Date() })
    .where(eq(conversations.id, conversationId));

  return c.json({ success: true });
});

app.put("/:id/pin", async (c) => {
  const user = c.get("user");
  const conversationId = c.req.param("id");

  if (!isValidUUID(conversationId)) {
    return c.json({ error: "Invalid conversation ID" }, 400);
  }

  let rawBody: unknown;
  try {
    rawBody = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  const result = pinSchema.safeParse(rawBody);
  if (!result.success) {
    return c.json(
      { error: "Invalid request", details: result.error.flatten().fieldErrors },
      400
    );
  }

  const { is_pinned: isPinned } = result.data;

  const conversation = await db.query.conversations.findFirst({
    where: and(
      eq(conversations.id, conversationId),
      eq(conversations.userId, user.id)
    ),
  });

  if (!conversation) {
    return c.json({ error: "Conversation not found" }, 404);
  }

  await db
    .update(conversations)
    .set({ isPinned, updatedAt: new Date() })
    .where(eq(conversations.id, conversationId));

  return c.json({ success: true, is_pinned: isPinned });
});

export default app;
