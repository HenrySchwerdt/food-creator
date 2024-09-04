import { NextResponse, type NextRequest } from 'next/server';
import { env } from './env';

export function middleware(req: NextRequest) {
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
    return NextResponse.next();
}