import { useState } from "react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

interface Props {
    items: string[];
    title: string;
    onUpdate: (items: string[]) => void;
}

export function EditableList({ items, onUpdate, title }: Props) {
    const [newItem, setNewItem] = useState("");
    return <div className="shadow-md rounded-md p-5">
        <h1>{title}</h1>
        <Separator />
        <div className="flex gap-2 pt-4">
            <Input placeholder="Neuer Eintrag" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={() => {
                const found = items.filter((item) => item.toLocaleLowerCase() === newItem.toLocaleLowerCase());
                if (found.length > 0) {
                    alert("Eintrag bereits vorhanden");
                    return;
                }
                onUpdate([...items, newItem]);
                setNewItem("");
            }}>Hinzufügen</button>
        </div>
        <ul className="list-disc space-y-1 pl-4">
            {items.map((item, index) => (
                <li key={index}>
                    <div className="flex gap-2">
                        <span>{item}</span>
                        <button onClick={() => {
                            onUpdate(items.filter((_, i) => i !== index));
                        }}>Entfernen</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
}