import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { user } from "../db/schema/users";
import { session } from "../db/schema/session";
import { account } from "../db/schema/account";
import { verification } from "../db/schema/verification";
import { db } from "../db/db";

export const authenticate = betterAuth({
  appName: "NUXT_AUTH_SAMPLE",
  rateLimit: {
    window: 60,
    max: 100,
  },
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      user: user,
      session: session,
      account: account,
      verification: verification,
    },
  }),
  emailAndPassword: {
    enabled: true,
    sendEmailVerificationOnSignUp: true,
    minPasswordLength: 8,
    maxPasswordLength: 32,
  },
  // Uncomment if you want social login
  //   socialProviders: {
  //     google: {
  //       clientId: Bun.env["GOOGLE_CLIENT_ID"]!,
  //       clientSecret: Bun.env["GOOGLE_CLIENT_SECRET"]!,
  //     },
  //     discord: {
  //       clientId: Bun.env["DISCORD_CLIENT_ID"]!,
  //       clientSecret: Bun.env["DISCORD_CLIENT_SECRET"]!,
  //     },
  //     facebook: {
  //       clientId: Bun.env["FACEBOOK_CLIENT_ID"]!,
  //       clientSecret: Bun.env["FACEBOOK_CLIENT_SECRET"]!,
  //     },
  //   },
});
