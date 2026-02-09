import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import { db } from "~/server/db";
import TrainClient from "./train-client";

async function Train() {
    const session = await auth();
    if (!session) redirect("/sign-in");

    const levelMappings = await db.levelToTrack.findMany();

    return (
        <TrainClient
            userId={session.user.id}
            levelMappings={levelMappings}
        />
    )
}

export default Train;