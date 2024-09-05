import NextAuth, { type AuthOptions, type RequestInternal, type User } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts";
import { getUserByEmail } from '~/server/repository/userRepository';

const authOptions = {
    session: {
        strategy: 'jwt',
    },
    // pages: {
    //     signIn: '/auth/signin',
    // },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"password" | "username", string> | undefined, _req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Promise<User | null> {
                if (!credentials) return null;
                if (!credentials.username || !credentials.password) return null;
                const user = await getUserByEmail(credentials.username);
                if (!user) return null;
                if (credentials.username === user?.email && compareSync(credentials.password, user.hash)) {
                    return {
                        id: user.id,
                        name: user.id,
                        email: user.email
                    } as User;
                }
                return null;
            }
        }),
    ],
} as AuthOptions


// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);


export { handler as GET, handler as POST };
