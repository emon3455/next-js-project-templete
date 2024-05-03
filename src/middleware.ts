import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  const { pathname, href } = request.nextUrl;
  const isPath = (path: any) => pathname.startsWith(path);

  try {
    const getCookie = request.cookies.get("authToken")?.value || null;
    const { user } = JSON.parse(getCookie as any) || {};

    if(user?.role && (pathname==='/login' || pathname === '/register')){
      return NextResponse.redirect(
        new URL(`/`, href)
      );
    }

    if(user?.role !== 'ADMIN' && (pathname==='/admin' && isPath('/admin'))){
      return NextResponse.redirect(
        new URL(`/login?redirectUrl=${pathname}`, href)
      );
    }

    if(user?.role === 'ADMIN' && pathname==='/customer'){
      return NextResponse.redirect(
        new URL(`/admin`, href)
      );
    }

    if(user?.role !== 'CUSTOMER' && (pathname==='/customer' && isPath('/customer'))){
      return NextResponse.redirect(
        new URL(`/login?redirectUrl=${pathname}`, href)
      );
    }

    if(user?.role === 'CUSTOMER' && pathname==='/admin'){
      return NextResponse.redirect(
        new URL(`/customer`, href)
      );
    }
    
    
  } catch (error) {
    console.log("error", error);
  }
};

// See "Matching Paths" below to learn more
export const config = {
  runtime: "experimental-edge",
  matcher: [
    "/",
    "/admin/:path*",
    "/customer/:path*",
    "/login/:path*",
    "/register/:path*",
  ],
};
