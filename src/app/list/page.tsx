import { getAllWeekMenus } from "~/server/repository/menuRepository";
import { ShoppingList } from "../_components/ShoppingList";
import { NavBar } from "~/components/feature-common/navbar";
export const dynamic = "force-dynamic";

export default async function ListPage() {
  const menuWeek = (await getAllWeekMenus())[0];
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <NavBar />
      <ShoppingList  list={menuWeek!.list}/> 
    </main>
  );
}
