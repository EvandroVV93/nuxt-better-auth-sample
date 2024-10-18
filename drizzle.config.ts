import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./server/db/migrations",
  schema: "./server/db/schema",
  dialect: "sqlite",
  dbCredentials: {
    url: "database.db",
  },
  migrations: {
    prefix: "timestamp",
    table: "__migrations",
  },
});
