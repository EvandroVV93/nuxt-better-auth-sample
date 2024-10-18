import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text().notNull().primaryKey(),
  name: text().notNull(),
  email: text().unique().notNull(),
  emailVerified: integer({ mode: "boolean" }).default(false),
  image: text(),
  createdAt: text().default(sql`(CURRENT_DATE)`),
  updatedAt: text().default(sql`(CURRENT_DATE)`),
  password_hash: text(),
});

type InferredDBUser = typeof user.$inferSelect;

export type DBUser = Omit<InferredDBUser, "id"> & {
  id?: string;
};
