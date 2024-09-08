import { getAllWeekMenus } from "~/server/repository/menuRepository";
import { ShoppingList } from "../../_components/ShoppingList";
export const dynamic = "force-dynamic";

export default async function ListPage() {
  const menuWeek = (await getAllWeekMenus())[0];
  return <ShoppingList list={menuWeek!.list} />;
}
