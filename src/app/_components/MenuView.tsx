import { type Menu } from "~/server/domain/types";

interface MenuViewProps {
    menuItem: Menu;
    menuName: string;
}

export function MenuView({ menuItem, menuName }: MenuViewProps) {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                {menuName}: {menuItem.name}
            </h2>
            
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Zutaten</h3>
                <ul className="space-y-2">
                    {menuItem.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-lg text-gray-600 flex items-center">
                            <span className="mr-2 text-green-500">•</span>{ingredient}
                        </li>
                    ))}
                </ul>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Schritte</h3>
                <ol className="list-decimal list-inside space-y-3">
                    {menuItem.steps.map((step, index) => (
                        <li key={index} className="text-lg text-gray-600">
                            {step}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
