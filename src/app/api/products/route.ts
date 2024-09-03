import { type NextRequest } from "next/server";
import { type Product } from "~/server/domain/types";
import { insertWine, removeAllProducts } from "~/server/repository/productRepository";



const POST = async (req: NextRequest) => {
    try {
        await removeAllProducts();
        const body = await req.json() as Product[];
        for (const product of body) {
            await insertWine(product);
        }
        return new Response("Records updated", { status: 200 });
    } catch (error) {
        console.error('Error updating record:', error);
        return new Response("Internal server error", { status: 500 });
    }
}

export {POST};