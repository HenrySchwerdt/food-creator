"use client";
import { useState } from "react";
import { EditableList } from "./editable-list";
import { Separator } from "@radix-ui/react-separator";

export function Settings() {
    const [items, setItems] = useState<string[]>([]);
  return <div> 
      
            <EditableList items={items} onUpdate={setItems} title="Favorisierte Lebensmittel" />
        

        
  </div>;
}