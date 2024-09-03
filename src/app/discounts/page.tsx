"use server";

import { getAllWines } from "~/server/repository/productRepository";
import { ProductCard } from "../_components/ProductCard";

export default async function Discounts() {
    const products = await getAllWines();
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-3">
            {products
            .filter((product) => product.price != null)
            .map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </main>
    );
  }