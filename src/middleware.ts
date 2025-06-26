// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const role = req.cookies.get("role")?.value;
//   const pathname = req.nextUrl.pathname;

//   if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }
//   if (pathname.startsWith("/dashboard/user") && role !== "user") {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };



import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
