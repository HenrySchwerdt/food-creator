import { type NextRequest } from "next/server";
import { type Product } from "~/server/domain/types";
import { insertWine } from "~/server/repository/productRepository";



const POST = async (req: NextRequest) => {
    try {
        const body = await req.json() as Product[];
        for (const product of body) {
            await insertWine(product);
        }
    

    } catch (error) {
        console.error('Error updating record:', error);
        return new Response("Internal server error", { status: 500 });
    }
}

export {POST};