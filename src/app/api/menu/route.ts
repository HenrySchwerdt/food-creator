import { type NextRequest } from "next/server";
import { env } from "~/env";
import { type WeekMenu } from "~/server/domain/types";
import { insertMenu, removeAllWeekMenus } from "~/server/repository/menuRepository";

const POST = async (req: NextRequest) => {
    if (req.headers.get('Authorization') !== `Bearer ${env.REFRESH_MENU_TOKEN}`) {
        return new Response("Unauthorized", { status: 401 });
    }
    try {
        await removeAllWeekMenus();
        const body = await req.json() as WeekMenu;
        await insertMenu(body);
        return new Response("Records updated", { status: 200 });
    } catch (error) {
        console.error('Error updating record:', error);
        return new Response("Internal server error", { status: 500 });
    }
}

export {POST};