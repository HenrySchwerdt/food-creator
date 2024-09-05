import { getServerSession } from "next-auth";
import { NavBar } from "~/components/feature-common/navbar";
import { getUser } from "~/server/repository/userRepository";

export const dynamic = "force-dynamic";

export default async function ProfileSettings() {;
    const session = await getServerSession();
    const user = await getUser(session!.user!.name as string);
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <NavBar />
            <h1>Profile Settings</h1>
            <p>Your user ID is: {JSON.stringify(user)}</p>
            {/* Render other profile-related components */}
        </div>
    );
}