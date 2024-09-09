import { auth } from "@clerk/nextjs/server";
import { type NextRequest } from "next/server";
import { User } from "~/server/domain/types";
import { getUser, insertUser } from "~/server/repository/userRepository";


const POST = async (req: NextRequest) => {
    const {userId} = auth();
    if (!userId) {
        console.error("Unauthorized");
        return new Response("Unauthorized", { status: 401 });
    }
    const body = await req.json() as User;
    const dbUser = await getUser(userId);
    if (dbUser) {
        console.error("User already exists");
        return new Response("User already exists", { status: 409 });
    }
    await insertUser({...body,
        id: userId
    });
    console.error("User created with id " + userId);
    return new Response("User created", { status: 201 });
};


export { POST };
