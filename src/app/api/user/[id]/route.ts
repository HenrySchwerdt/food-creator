import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { User } from "~/server/domain/types";
import { updateUser } from "~/server/repository/userRepository";

const PUT = async (req: NextRequest) => {
    const {userId} = auth();
    if (!userId) {
        console.error("Unauthorized");
        return new Response("Unauthorized", { status: 401 });
    }
    const body = await req.json() as User;
    body.id = userId;
    console.log("PUT User: "+JSON.stringify(body));
    await updateUser(body);
    return new Response("User updated", { status: 200 });
}

export { PUT };