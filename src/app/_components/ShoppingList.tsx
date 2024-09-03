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
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="text-lg font-bold">Food-Creator</h2>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>{new Date().toLocaleDateString("de-DE")}</p>
        </div>
      </div>
      <div className="border-t border-muted pt-4 mb-4">
        <div className="grid grid-cols-4 gap-2 font-medium text-sm pb-2">
          <div>Item</div>
          <div className="text-right">Menge</div>
          <div className="text-right">Preis</div>
          <div className="text-right">Laden</div>
        </div>
        <div className="space-y-2">
            {
                list.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 text-sm">
                        <div>{item.name}</div>
                        <div className="text-right">{item.quantity}</div>
                        <div className="text-right">€ {item.price.toFixed(2)}</div>
                        <div className="text-right">{item.origin}</div>
                    </div>
                ))
            }
        </div>
      </div>
      <div className="border-t border-muted pt-4">
        <div className="grid grid-cols-2 gap-2 font-medium text-sm">
        </div>
        <div className="grid grid-cols-2 gap-2 font-medium text-sm">
        </div>
        <div className="grid grid-cols-2 gap-2 font-medium text-lg">
          <div>Summe</div>
          <div className="text-right">€ {list.total}</div>
        </div>
      </div>
      <div className="mt-4 text-center text-muted-foreground text-sm">Vielen Dank!</div>
      <ShoppingListPDFDownload list={list} />
    </div>
    )
}
