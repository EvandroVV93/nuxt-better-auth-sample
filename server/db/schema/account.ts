import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "./users";

export const account = sqliteTable("account", {
  id: text().notNull().primaryKey(),
  userId: text()
    .notNull()
    .references(() => user.id),
  accountId: text().notNull(),
  providerId: text().notNull(),
  accessToken: text(),
  refreshToken: text(),
  expiresAt: text(),
  password: text(),
});
