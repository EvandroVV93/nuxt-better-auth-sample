import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

export const db = drizzle({
  connection: { url: Bun.env["DB_FILE_NAME"] as string },
});
