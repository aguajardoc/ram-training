import { api } from "~/trpc/react";
import { auth } from "~/server/auth";
import Problem from "../_components/problem";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import LevelPicker from "../_components/level-picker";
import { db } from "~/server/db";
import "../../styles/level-picker.css"
import "../../styles/globals.css"


async function Train() {
    const { data: problems, isLoading } = api.problem.all.useQuery();
    const { data: session } = useSession();
    const { data: hasChosenLevel } = api.user.hasChosenLevel.useQuery();

    if (!session) redirect("/sign-in")
    const levelMappings = await db.levelToTrack.findMany();

    if (!hasChosenLevel) {
        return (
            <div>
                <LevelPicker
                    userId={session.user.id}
                    mappings={levelMappings}
                />
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="loading">
                Fetching cool problems, please wait!
            </div>
        )
    }

    return (
    <div className="page">
        {/* Title */}
        <h1 className="title">
            TRAINING
        </h1>
        {/* Choose Level */}

        {/* Choose Mode */}

        {/* Problem List */}
        {problems?.map(p => (
            <Problem
                key={p.id}
                problemType={p.type}
                problemName={p.name}
                problemURL={p.url}
            />
        ))}
    </div>
    )
}

export default Train;