"server only";
import { db } from '~/server/db';
import { type Product } from '../domain/types';
import { products } from '../db/schema';


export const insertProduct = async (product: Product): Promise<void> => {
    await db.insert(products).values({
        img: product.img,
        name: product.name,
        description: product.description,
        price: product.price,
        originalPrice: product.originalPrice,
        packaging: product.packaging,
        availability: product.availability,
        dataOrigin: product.dataOrigin,
        discount: product.discount,
    }).execute();
}

export const removeAllProducts = async (): Promise<void> => {
    // eslint-disable-next-line drizzle/enforce-delete-with-where
    await db.delete(products).execute();
}

export const getAllProducts = async (): Promise<Product[]> => {
    const product = await db.query.products.findMany()
    return product;
}

