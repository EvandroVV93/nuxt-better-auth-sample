import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const verification = sqliteTable("verification", {
  id: text().notNull().primaryKey(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: text().notNull(),
});
