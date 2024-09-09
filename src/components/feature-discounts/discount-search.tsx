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

    return (
        <div>
            <div className="flex w-full flex-row-reverse pt-5">
                <Input
                    placeholder="Suche nach Rabatten"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-[400px] bg-white"
                />
            </div>
            <div className="grid gap-4 pt-5 justify-center"
                style={{ gridTemplateColumns: "repeat(auto-fill, minmax(24rem, 1fr))" }}>
                {products
                    .filter((product) =>
                        product.name!.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((product) => (
                        <DiscountCard key={product.id} product={product} />
                    ))}
            </div>
        </div>
    );
}
