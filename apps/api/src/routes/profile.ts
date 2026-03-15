import { Hono } from "hono";
import { z } from "zod";
import { authMiddleware, type UserWithTier } from "../middleware/auth";
import { db } from "../db";
import { userProfiles } from "../db/schema";
import { eq } from "drizzle-orm";

type Env = {
  Variables: {
    user: UserWithTier;
  };
};

const updateProfileSchema = z.object({
  name: z.string().max(100).optional(),
  occupation: z.string().max(100).optional(),
  traits: z.array(z.string().max(100)).max(50).optional(),
  other: z.string().max(3000).optional(),
});

const app = new Hono<Env>();

app.use("/*", authMiddleware);

app.get("/", async (c) => {
  const user = c.get("user");

  const profile = await db.query.userProfiles.findFirst({
    where: eq(userProfiles.userId, user.id),
  });

  if (!profile) {
    const [newProfile] = await db
      .insert(userProfiles)
      .values({
        userId: user.id,
        displayName: user.name ?? null,
      })
      .returning();

    return c.json({
      name: newProfile.displayName ?? "",
      occupation: newProfile.occupation ?? "",
      traits: newProfile.traits,
      other: newProfile.other ?? "",
    });
  }

  return c.json({
    name: profile.displayName ?? "",
    occupation: profile.occupation ?? "",
    traits: profile.traits,
    other: profile.other ?? "",
  });
});

app.post("/", async (c) => {
  const user = c.get("user");

  let rawBody: unknown;
  try {
    rawBody = await c.req.json();
  } catch {
    return c.json({ error: "Invalid JSON body" }, 400);
  }

  const result = updateProfileSchema.safeParse(rawBody);
  if (!result.success) {
    return c.json(
      { error: "Invalid request", details: result.error.flatten().fieldErrors },
      400
    );
  }

  const { name, occupation, traits, other } = result.data;

  const existing = await db.query.userProfiles.findFirst({
    where: eq(userProfiles.userId, user.id),
  });

  if (existing) {
    await db
      .update(userProfiles)
      .set({
        displayName: name ?? existing.displayName,
        occupation: occupation ?? existing.occupation,
        traits: traits ?? existing.traits,
        other: other ?? existing.other,
      })
      .where(eq(userProfiles.userId, user.id));
  } else {
    await db.insert(userProfiles).values({
      userId: user.id,
      displayName: name ?? null,
      occupation: occupation ?? null,
      traits: traits ?? [],
      other: other ?? null,
    });
  }

  return c.json({
    name: name ?? "",
    occupation: occupation ?? "",
    traits: traits ?? [],
    other: other ?? "",
  });
});

export default app;
