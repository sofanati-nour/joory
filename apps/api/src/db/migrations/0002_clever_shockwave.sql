ALTER TABLE "usage_buckets" ALTER COLUMN "window_capacity" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "usage_buckets" ALTER COLUMN "window_capacity" SET DEFAULT 70;--> statement-breakpoint
ALTER TABLE "usage_buckets" ALTER COLUMN "window_remaining" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "usage_buckets" ALTER COLUMN "window_remaining" SET DEFAULT 70;--> statement-breakpoint
ALTER TABLE "usage_buckets" ALTER COLUMN "overage_capacity" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "usage_buckets" ALTER COLUMN "overage_capacity" SET DEFAULT 350;--> statement-breakpoint
ALTER TABLE "usage_buckets" ALTER COLUMN "overage_remaining" SET DATA TYPE real;--> statement-breakpoint
ALTER TABLE "usage_buckets" ALTER COLUMN "overage_remaining" SET DEFAULT 350;