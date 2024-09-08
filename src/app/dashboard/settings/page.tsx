import { auth } from "@clerk/nextjs/server";
import { Separator } from "~/components/ui/separator";
import { getUser } from "~/server/repository/userRepository";


export default async function SettingsPage() {
    const {userId} = auth();
    if (!userId) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false,
            },
        };
    }
    const user = getUser(userId);
    return <div> 
        <h1>Einstellungen</h1>
        <Separator />

    </div>;
}