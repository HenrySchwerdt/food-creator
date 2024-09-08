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
  const reducedList = list.items.reduce((acc, item) => {
    // Find an existing item in the accumulator with the same name
    const existingItem = acc.find((i) => i.name === item.name);

    if (existingItem) {
      // Parse and update the quantity
      const existingQuantity = parseInt(
        existingItem.quantity.split(" ")[0] ?? "0",
      );
      const newQuantity = parseInt(item.quantity.split(" ")[0] ?? "0");
      const unit = existingItem.quantity.split(" ")[1] ?? "";

      // Update the quantity in the accumulator
      existingItem.quantity =
        `${existingQuantity + newQuantity} ${unit}`.trim();
    } else {
      // Add the item to the accumulator if not found
      acc.push(item);
    }

    return acc;
  }, [] as ShoppingItem[]);
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-lg font-bold">Food-Creator</h2>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>{new Date().toLocaleDateString("de-DE")}</p>
        </div>
      </div>
      <div className="mb-4 border-t border-muted pt-4">
        <div className="grid grid-cols-4 gap-2 pb-2 text-sm font-medium">
          <div>Item</div>
          <div className="text-right">Menge</div>
          <div className="text-right">Preis</div>
          <div className="text-right">Laden</div>
        </div>
        <div className="space-y-2">
          {reducedList.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-2 text-sm">
              <div>{item.name}</div>
              <div className="text-right">{item.quantity}</div>
              <div className="text-right">€ {item.price.toFixed(2)}</div>
              <div className="text-right">{item.origin}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-muted pt-4">
        <div className="grid grid-cols-2 gap-2 text-sm font-medium"></div>
        <div className="grid grid-cols-2 gap-2 text-sm font-medium"></div>
        <div className="grid grid-cols-2 gap-2 text-lg font-medium">
          <div>Summe</div>
          <div className="text-right">€ {list.total}</div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Vielen Dank!
      </div>
      <ShoppingListPDFDownload list={list} />
    </div>
  );
}
