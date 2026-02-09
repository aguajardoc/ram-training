import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import { db } from "~/server/db";
import TrainClient from "./train-client";

async function Train() {
    const session = await auth();
    if (!session) redirect("/sign-in");

    const levelMappings = await db.levelToTrack.findMany();

    const userEnrollments = await db.userTrack.findMany({
        where: { userId: session.user.id },
        select: { trackId: true }
    });

  
    const enrolledTrackIds = userEnrollments.map(u => u.trackId);

    return (
        <TrainClient
            userId={session.user.id}
            levelMappings={levelMappings}
            enrolledTrackIds={enrolledTrackIds}
        />
    )
}

export default Train;