"use client"
import { api } from "~/trpc/react";
import Problem from "../_components/problem";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function Train() {
    const { data: problems, isLoading } = api.problem.all.useQuery();
    const { data: session } = useSession();

    if (!session) redirect("/sign-in")

    if (isLoading) {
        return (
            <div className="loading">
                Fetching cool problems, please wait!
            </div>
        )
    }

    return (
    <div className="page">
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