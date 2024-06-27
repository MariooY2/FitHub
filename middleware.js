import { NextResponse } from "next/server"

/*export function middleware(request){
    console.log(request)

    return NextResponse.redirect(new URL("/",request.url))
}*/

import { auth } from "./app/_lib/auth";
export const middleware = auth;
export const config = {
  matcher: [
    '/dashboard/:path*'
  ],
};
/*export const config = {
    matcher: [
      "/dashboard",
      "/dashboard/profile",
      "/dashboard/progress",
      "dashboard/community",
      "dashboard/workouts",
      "dashboard/home",
    ],
  };*/