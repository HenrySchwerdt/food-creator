import { auth } from "@clerk/nextjs/server";
import { type NextRequest } from "next/server";
import { type User } from "~/server/domain/types";
import {
  getUser,
  insertUser,
  updateUser,
} from "~/server/repository/userRepository";

const POST = async (req: NextRequest) => {
  const { userId } = auth();
  if (!userId) {
    console.error("Unauthorized");
    return new Response("Unauthorized", { status: 401 });
  }
  const body = (await req.json()) as User;
  const dbUser = await getUser(userId);
  if (dbUser) {
    await updateUser({
      ...body,
      id: userId,
    });
    return new Response("User updated", { status: 200 });
  } else {
    await insertUser({
      ...body,
      id: userId,
    });
    console.error("User created with id " + userId);
    return new Response("User created", { status: 201 });
  }
};

export { POST };
