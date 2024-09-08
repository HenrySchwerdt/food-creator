import { NextRequest } from "next/server";
import { User } from "~/server/domain/types";
import { updateUser } from "~/server/repository/userRepository";

const PUT = async (req: NextRequest) => {
    const body = await req.json() as User;
    await updateUser(body);
    return new Response("User updated", { status: 200 });
}

export { PUT };