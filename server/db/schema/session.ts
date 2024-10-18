import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "./users";

export const session = sqliteTable("session", {
  id: text().notNull().primaryKey(),
  userId: text()
    .notNull()
    .references(() => user.id),
  expiresAt: integer().notNull(),
  ipAddress: text(),
  userAgent: text(),
});

type InferredSession = typeof session.$inferSelect;

export type Session = Omit<InferredSession, "id"> & {
  id?: string;
};
