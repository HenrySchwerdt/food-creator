"use client";
import { useState } from "react";
import { EditableList } from "./editable-list";
import { Separator } from "@radix-ui/react-separator";

export function Settings() {
    const [items, setItems] = useState<string[]>([]);
  return <div> 
        <h1>Favorisierte Lebensmittel:</h1>
        <Separator />
        <div className="pt-4">
            <EditableList items={items} onUpdate={setItems} />
        </div>
        
  </div>;
}