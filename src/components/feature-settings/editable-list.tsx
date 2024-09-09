import { useState } from "react";
import { Input } from "../ui/input";

interface Props {
    items: string[];
    onUpdate: (items: string[]) => void;
}

export function EditableList({ items, onUpdate }: Props) {
    const [newItem, setNewItem] = useState("");
    return <div className="shadow-md rounded-md p-5">
        <div className="flex gap-2">
            <Input placeholder="Neuer Eintrag" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={() => {
                const found = items.find((item) => item.toLocaleLowerCase === newItem.toLocaleLowerCase);
                if (!found) {
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