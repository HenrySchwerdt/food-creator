import { auth } from "@clerk/nextjs/server";
import { type NextRequest } from "next/server";
import { env } from "~/env";


const POST = async (req: NextRequest) => {
    const { userId } = auth();
    if (!userId) {
      console.error("Unauthorized");
      return new Response("Unauthorized", { status: 401 });
    }
    await fetch(env.GITHUB_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
            'Accept': 'application/vnd.github+json',
        },
        body: JSON.stringify({
            ref: 'main',
            inputs: {
                userId
            }
        })
    })

  return new Response("Menu creation triggered", { status: 200 });
};

export { POST };
