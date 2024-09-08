import { NextResponse } from 'next/server';
import { env } from './env';
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/api(.*)", "/dashboard(.*)"]);

export default clerkMiddleware((auth, request) => {
    if (request.nextUrl.pathname == '/') {
        // This is to prevent lawers from accessing the home page
        const basicAuth = request.headers.get('authorization');
        const url = request.nextUrl;
        if (basicAuth) {
            const authValue = basicAuth.split(' ')[1];
            const [username, password] = Buffer.from(authValue!, 'base64').toString().split(':');
            if (username === env.USERNAME && password === env.PASSWORD) {
                return NextResponse.next();
            }
        }
        url.pathname = '/api/blockHome';
        return NextResponse.rewrite(url);
    }
    if (isProtectedRoute(request)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};