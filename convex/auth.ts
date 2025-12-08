import { convexAuth, getAuthUserId } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";
import { query } from "./_generated/server";
import { v } from "convex/values";

const masterAdminEmail =
  process.env.MASTER_ADMIN_EMAIL ??
  (process.env.NODE_ENV === "development" ? "dev-admin@localhost" : undefined);

const adminEmailList = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);
if (masterAdminEmail) {
  adminEmailList.push(masterAdminEmail.toLowerCase());
}
const adminEmails = new Set(adminEmailList);

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Password],
});

export const loggedInUser = query({
  args: {},
  returns: v.union(v.null(), v.any()),
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }
    const user = await ctx.db.get(userId);
    if (!user) {
      return null;
    }
    return user;
  },
});

export const adminSession = query({
  args: {},
  returns: v.object({
    isAuthenticated: v.boolean(),
    isAdmin: v.boolean(),
    email: v.union(v.string(), v.null()),
  }),
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return { isAuthenticated: false, isAdmin: false, email: null };
    }
    const user = await ctx.db.get(userId);
    const email = (user as { email?: string } | null)?.email ?? null;
    const isAdmin = email ? adminEmails.has(email.toLowerCase()) : false;
    return { isAuthenticated: true, isAdmin, email };
  },
});
