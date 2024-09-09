"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Product } from "~/server/domain/types";
import { DiscountCard } from "./discount-card";

interface Props {
    products: Product[];
}

export function DiscountSearch({ products }: Props) {
    const [search, setSearch] = useState("");
    return <div>
        <Input placeholder="Suche nach Rabatten" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-5">
            {products
                .filter((product) => product.name!.toLowerCase().includes(search.toLowerCase()))
                .map((product) => <DiscountCard key={product.id} product={product} />)
            }
        </div>
    </div>
}