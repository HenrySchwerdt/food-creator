import { type NextRequest } from "next/server";
import { User } from "~/server/domain/types";
import { getUser, insertUser } from "~/server/repository/userRepository";


const POST = async (req: NextRequest) => {
    const body = await req.json() as User;
    const dbUser = await getUser(body.id);
    if (dbUser) {
        return new Response("User already exists", { status: 409 });
    }
    await insertUser(body);
    return new Response("User created", { status: 201 });
};


export { POST };
