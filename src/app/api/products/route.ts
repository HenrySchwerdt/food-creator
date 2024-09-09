import { NextRequest } from "next/server";
import { Product } from "~/server/domain/types";
import { insertProduct, removeAllProducts } from "~/server/repository/productRepository";

const POST = async (req: NextRequest) => {

    const body = (await req.json()) as Product[];
    await removeAllProducts();
    for (const product of body) {
        await insertProduct(product);
    }
    return new Response("Products inserted", { status: 201 });

};

export { POST };