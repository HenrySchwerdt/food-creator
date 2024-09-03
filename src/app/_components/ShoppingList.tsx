"use client";

import { ShoppingListPDFDownload } from "./ShoppingListPdfDownload";


interface ShoppingItem {
    name: string;
    price: number;
    quantity: string;
    origin: string;
}

interface ShoppingListProps {
    list: {
        total: number;
        items: ShoppingItem[];
    };
}
export function ShoppingList({ list }: ShoppingListProps) {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-700">Einkaufsliste</h2>
                <p className="text-sm text-gray-500">Vielen Dank für Ihren Einkauf!</p>
            </div>

            <div className="border-t border-gray-300 py-4">
                {list.items.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-200"
                    >
                        <div>
                            <p className="text-lg font-semibold text-gray-800">
                                {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {item.quantity} - {item.origin}
                            </p>
                        </div>
                        <p className="text-lg font-bold text-gray-800">
                            {item.price.toFixed(2)} €
                        </p>
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-300 mt-4 pt-4">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-gray-800">Gesamt:</p>
                    <p className="text-xl font-bold text-gray-800">{list.total.toFixed(2)} €</p>
                </div>
            </div>

            {/* PDF download link */}
            <ShoppingListPDFDownload list={list} />
        </div>
    );
}
