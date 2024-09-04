import { type NextRequest } from "next/server";

const GET = async (_req: NextRequest) => {
   return new Response("Authentication required", { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' } });
}

export {GET};