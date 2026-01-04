"use client"
import { api } from "~/trpc/react";
import Problem from "../_components/problem";

function Train() {
    const { data: problems, isLoading } = api.problem.all.useQuery();

    if (isLoading) return <></>;

    return (
    <div>
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