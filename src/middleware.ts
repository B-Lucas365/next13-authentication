import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, response: NextResponse) {
  const path = request.nextUrl.pathname;

  const isPublicPage = path === "/login" || path === "/register";
  const token = request.cookies.get("token")?.value;

  //if path is public and token is present, redirect to home page
  if (isPublicPage && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPage && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login/:path*", "/register/:path*", "/profile/:path*"],
};
