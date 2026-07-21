CREATE TABLE IF NOT EXISTS "submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"mobile" text NOT NULL,
	"email" text,
	"service" text,
	"message" text NOT NULL,
	"source_page" text,
	"ip" text,
	"user_agent" text,
	"email_sent" boolean DEFAULT false
);
