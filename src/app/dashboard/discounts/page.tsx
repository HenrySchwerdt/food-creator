import { getAllProducts } from "~/server/repository/productRepository";
import { ProductCard } from "../../_components/ProductCard";

export default async function DiscountPage() {
  const products = await getAllProducts();
  return (
    <div className="grid grid-cols-1 gap-6 px-10 py-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products
        .filter((product) => product.price != null)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </div>
  );
}
export const dynamic = "force-dynamic";
