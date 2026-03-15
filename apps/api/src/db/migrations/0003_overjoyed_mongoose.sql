ALTER TABLE "user_profiles" ADD COLUMN "occupation" text;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "traits" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "user_profiles" ADD COLUMN "other" text;