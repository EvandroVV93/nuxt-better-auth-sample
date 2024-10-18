import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const rateLimit = sqliteTable("rateLimit", {
  key: text().notNull().primaryKey(),
  window: integer().notNull(),
  max: integer().notNull(),
  count: integer().notNull(),
});
