import { auth } from "@clerk/nextjs/server";
import { ShoppingList } from "~/components/feature-menu/shopping-list";
import { Separator } from "~/components/ui/separator";
import { getUserMenu } from "~/server/repository/menuRepository";

export default async function ShoppingListPage() {
  const { userId } = auth();
  if (!userId) {
    console.error("Unauthorized");
    return new Response("Unauthorized", { status: 401 });
  }
  const userMenu = await getUserMenu(userId);
  if (!userMenu) {
    return <div>Kein Menü gefunden</div>;
  }
  return (
    <div className="overflow-y-auto">
      <h1>Einkaufsliste</h1>
      <Separator />
      <div className="flex w-full flex-row items-center justify-center pt-4">
        <ShoppingList list={userMenu.list} />
      </div>
    </div>
  );
}
