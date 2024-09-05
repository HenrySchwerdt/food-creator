import { getAllProducts } from "~/server/repository/productRepository";
import { ProductCard } from "../_components/ProductCard";
import { NavBar } from "~/components/feature-common/navbar";

export default async function DiscountPage() {
    const products = await getAllProducts();
    return (
      <main className="flex flex-col min-h-[100dvh]">
        <NavBar />
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
  export const dynamic = "force-dynamic";