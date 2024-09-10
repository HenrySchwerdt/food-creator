import { auth } from "@clerk/nextjs/server";
import { MenuDayView } from "~/components/feature-menu/menu-day";

import { Separator } from "~/components/ui/separator";
import { MenuDay } from "~/server/domain/types";
import { getUserMenu } from "~/server/repository/menuRepository";

export default async function ShoppingListPage() {
  const { userId } = auth();
  if (!userId) {
    console.error("Unauthorized");
    return new Response("Unauthorized", { status: 401 });
  }
  const dayKeys = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
  const dayMap: Record<string, string> = {
    mon: "Montag",
    tue: "Dienstag",
    wen: "Mittwoch",
    thu: "Donnerstag",
    fri: "Freitag",
    sat: "Samstag",
    sun: "Sonntag",
  };
  
  const userMenu = await getUserMenu(userId);
  if (!userMenu) {
    return <div>Kein Menü gefunden</div>;
  }
  return (
    <div className="overflow-y-auto">
      <div className="flex justify-between items-center">
        <h1>Menu</h1>
       
      </div>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {dayKeys.map((dayKey) => (
            <MenuDayView day={dayMap[dayKey]!} menu={userMenu![dayKey] as MenuDay} />
          
        ))}
        
      </div>
    </div>
  );
}
