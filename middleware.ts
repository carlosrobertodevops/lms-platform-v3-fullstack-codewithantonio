// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/app/api/", "/app/","/(api|trpc)(.*)" ],
// };

import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
//   publicRoutes: ["/api/webhook"]
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!.*\\..*|_next).*)", "/", "/app/api", "/app", "/api/webhook",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};