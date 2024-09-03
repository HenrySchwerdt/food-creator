import { getAllWeekMenus } from "~/server/repository/menuRepository";
import { ShoppingList } from "../_components/ShoppingList";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const menuWeek = (await getAllWeekMenus())[0];
  return (
    <main className="flex min-h-screen flex-col py-3 px-10">
      <ShoppingList  list={menuWeek!.list}/> 
    </main>
  );
}
