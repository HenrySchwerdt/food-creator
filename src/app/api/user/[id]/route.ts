import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { User } from "~/server/domain/types";
import { updateUser } from "~/server/repository/userRepository";

const GET = (req: NextRequest, { params: {id} }: { params: { id: string } }) => {
    return new Response("Get for "+ id +" not implemented", { status: 200 });
}

const PUT = async (req: NextRequest, { params: {id} }: { params: { id: string } }) => {
    const {userId} = auth();
    if (!userId || userId !== id) {
        console.error("Unauthorized");
        return new Response("Unauthorized", { status: 401 });
    }
    const body = await req.json() as User;
    body.id = userId;
    console.log("PUT User: "+JSON.stringify(body));
    await updateUser(body);
    return new Response("User updated", { status: 200 });
}

export { PUT, GET };