import { useState } from "react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Plus, Trash2 } from "lucide-react"; // Lucide Icons

interface Props {
    items: string[];
    title: string;
    onUpdate: (items: string[]) => void;
}

export function EditableList({ items, onUpdate, title }: Props) {
    const [newItem, setNewItem] = useState("");

    return (
        <div className="shadow-md rounded-md p-5 bg-white">
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
            <Separator className="my-4" />

            <div className="flex gap-2 pt-4">
                <Input
                    placeholder="Neuer Eintrag"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="flex-grow"
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={() => {
                        const found = items.filter(
                            (item) => item.toLocaleLowerCase() === newItem.toLocaleLowerCase()
                        );
                        if (found.length > 0) {
                            alert("Eintrag bereits vorhanden");
                            return;
                        }
                        onUpdate([...items, newItem]);
                        setNewItem("");
                    }}
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            <ul className="space-y-3 mt-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm">
                        <span className="text-gray-800">{item}</span>
                        <button
                            className="text-red-500 hover:text-red-600"
                            onClick={() => {
                                onUpdate(items.filter((_, i) => i !== index));
                            }}
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
