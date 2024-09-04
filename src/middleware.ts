import { NextResponse, type NextRequest } from 'next/server';
import { type NextRequestWithAuth, withAuth } from 'next-auth/middleware';
export { withAuth } from "next-auth/middleware";
import { env } from './env';

export async function middleware(req: NextRequest | NextRequestWithAuth) {
    if (req.nextUrl.pathname == '/') {
        // This is to prevent lawers from accessing the home page
        const basicAuth = req.headers.get('authorization');
        const url = req.nextUrl;
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
    // These urls are either checked in the handler or need to be public
    if (req.nextUrl.pathname.startsWith('/api/auth')
        || req.nextUrl.pathname.startsWith('/api/products')
        || req.nextUrl.pathname.startsWith('/api/menu')
        || req.nextUrl.pathname.startsWith('/api/blockHome')
        || req.nextUrl.pathname.startsWith('/auth')) {
        return NextResponse.next();
    }
    return withAuth(req as NextRequestWithAuth);
}