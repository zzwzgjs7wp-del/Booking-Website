import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Redirect the homepage (/) to /book (change if you want a different landing page)
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/book";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
