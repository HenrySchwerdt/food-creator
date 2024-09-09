import { auth } from "@clerk/nextjs/server";
import { Settings } from "~/components/feature-settings/settings";
import { Separator } from "~/components/ui/separator";
import { getUser } from "~/server/repository/userRepository";


export default async function SettingsPage() {
    const user = await getUser(auth().userId as string);
    return <div className="overflow-y-auto">
        <h1>Einstellungen</h1>
        <Separator />
        <Settings user={user} />
    </div>;
}