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
    return <div className="overflow-y-auto">
        <h1>Einkaufsliste</h1>
        <Separator />
        <div className="flex flex-row justify-center w-full items-center">
            <ShoppingList list={userMenu!.list} />
        </div>
    </div>
}