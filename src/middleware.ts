// Middleware configuration for Clerk authentication in a Next.js application.
// This middleware integrates Clerk's authentication services into the Next.js server-side logic.
// It ensures that requests to specified routes are authenticated according to Clerk's settings.

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  // Specifies the routes to apply the Clerk middleware to:
  // - Excludes routes with file extensions or Next.js internal routes (e.g., _next).
  // - Includes root path, API routes, and TRPC routes for authentication enforcement.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
