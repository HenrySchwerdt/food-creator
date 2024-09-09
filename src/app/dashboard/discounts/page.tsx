import { DiscountSearch } from "~/components/feature-discounts/discount-search";
import { Separator } from "~/components/ui/separator";
import { getAllProducts } from "~/server/repository/productRepository";


export default async function DiscountsPage() {
    const products = await getAllProducts();
    return <div className="overflow-y-auto"> 
        <h1>Rabatte</h1>
        <Separator />
        <DiscountSearch products={products} />
    </div>;
}