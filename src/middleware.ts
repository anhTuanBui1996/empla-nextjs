import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let originalUrl = request.nextUrl.clone();

  const session = request.cookies.get("next-auth.session-token")?.value;
  if (session) {
    // Validate the session
    return NextResponse.next();
  }

  originalUrl.pathname = "/api/auth/signin";
  return NextResponse.rewrite(originalUrl);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
