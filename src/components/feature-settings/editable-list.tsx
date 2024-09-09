import { useState } from "react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Plus, Trash2, ChevronLeft, ChevronRight } from "lucide-react"; // Lucide Icons

interface Props {
    items: string[];
    title: string;
    description: string;
    onUpdate: (items: string[]) => void;
    itemLimit?: number;  // Configurable limit, default is 50
}

export function EditableList({ items, onUpdate, title, description, itemLimit = 50 }: Props) {
    const [newItem, setNewItem] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5; // Show 10 items per page
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const handleAddItem = () => {
        if (items.length >= itemLimit) {
            alert(`You can only add up to ${itemLimit} items.`);
            return;
        }

        const trimmedItem = newItem.trim();
        if (trimmedItem === "") return;

        const found = items.some(
            (item) => item.toLowerCase() === trimmedItem.toLowerCase()
        );
        if (found) {
            alert("Item already exists");
            return;
        }

        onUpdate([...items, trimmedItem]);
        setNewItem("");
    };

    const handleRemoveItem = (indexToRemove: number) => {
        onUpdate(items.filter((_, index) => index !== indexToRemove));
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="shadow-md rounded-md p-5 bg-white">
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
            <p className="text-sm font-light text-gray-400 mt-4">{description}</p>
            <Separator className="my-4" />
            <Input
                placeholder="Suche..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4 max-w-[400px]"
            />

            <div className="flex gap-2 pt-4">
                <Input
                    placeholder="Hinzufügen..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="flex-grow"
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={handleAddItem}
                >
                    <Plus className="w-5 h-5" />
                </button>
            </div>

            <ul className="space-y-3 mt-4">
                {paginatedItems.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm"
                    >
                        <span className="text-gray-800">{item}</span>
                        <button
                            className="text-red-500 hover:text-red-600"
                            onClick={() => handleRemoveItem(items.indexOf(item))}
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </li>
                ))}
            </ul>

            {/* Pagination Controls */}
            {items.length > itemsPerPage && <div className="flex justify-between items-center mt-4">
                <button
                    className={`p-2 ${currentPage === 1 ? "opacity-50" : "hover:bg-gray-200"} rounded`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-gray-700">
                    Seite {currentPage} von {totalPages}
                </span>
                <button
                    className={`p-2 ${
                        currentPage === totalPages ? "opacity-50" : "hover:bg-gray-200"
                    } rounded`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>}
        </div>
    );
}
