import { pgTable, uuid, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const submissions = pgTable("submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  name: text("name").notNull(),
  mobile: text("mobile").notNull(),
  email: text("email"),
  service: text("service"),
  message: text("message").notNull(),
  sourcePage: text("source_page"),
  ip: text("ip"),
  userAgent: text("user_agent"),
  emailSent: boolean("email_sent").default(false),
});

export type Submission = typeof submissions.$inferSelect;
export type NewSubmission = typeof submissions.$inferInsert;
