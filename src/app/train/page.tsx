"use client"
import { api } from "~/trpc/react";
import Problem from "../_components/problem";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import "../../styles/globals.css"

function Train() {
    const { data: problems, isLoading } = api.problem.all.useQuery();
    const { data: session } = useSession();
    const { data: hasChosenLevel } = api.user.hasChosenLevel.useQuery();

    if (!session) redirect("/sign-in")

    if (!hasChosenLevel) {
        return (
            <div>
                Choose a Level!
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