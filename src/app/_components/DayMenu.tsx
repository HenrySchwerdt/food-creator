import { type MenuDay } from "~/server/domain/types";
import { MenuView } from "./MenuView";

interface DayMenuProps {
    menu: MenuDay;
    day: string;
}

export function DayMenu({ menu, day }: DayMenuProps) {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-xl shadow-xl min-w-[1000px]">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-8 text-center">
                {day}
            </h2>
            <div className="space-y-12">
                <MenuView menuItem={menu.lunch} menuName="Mittagessen" />
                <MenuView menuItem={menu.dinner} menuName="Abendessen" />
            </div>
        </div>
    );
}
