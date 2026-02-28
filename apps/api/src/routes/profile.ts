import { Hono } from "hono";
import { authMiddleware, type UserWithTier } from "../middleware/auth";
import { db } from "../db";
import { userProfiles } from "../db/schema";
import { eq } from "drizzle-orm";

type Env = {
  Variables: {
    user: UserWithTier;
  };
};

const app = new Hono<Env>();

app.use("/*", authMiddleware);

app.get("/", async (c) => {
  const user = c.get("user");

  const profile = await db.query.userProfiles.findFirst({
    where: eq(userProfiles.userId, user.id),
  });

  if (!profile) {
    const [newProfile] = await db.insert(userProfiles).values({
      userId: user.id,
      displayName: user.name ?? null,
    }).returning();
    
    return c.json({
      name: newProfile.displayName ?? "",
      occupation: "",
      traits: [],
      other: "",
    });
  }

  return c.json({
    name: profile.displayName ?? "",
    occupation: "",
    traits: [],
    other: "",
  });
});

app.post("/", async (c) => {
  const user = c.get("user");
  const body = await c.req.json();

  const name = body.name as string | undefined;
  const occupation = body.occupation as string | undefined;
  const traits = body.traits as string[] | undefined;
  const other = body.other as string | undefined;

  const existing = await db.query.userProfiles.findFirst({
    where: eq(userProfiles.userId, user.id),
  });

  if (existing) {
    await db.update(userProfiles)
      .set({
        displayName: name ?? existing.displayName,
      })
      .where(eq(userProfiles.userId, user.id));
  } else {
    await db.insert(userProfiles).values({
      userId: user.id,
      displayName: name ?? null,
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
