import type { Problem } from "generated/prisma";
import { createProblem } from "../admin/actions";
import { useState } from "react";

import AdminProblemDisplay from "./admin-problem-display";

type Props = {
    problems: Problem[],
}

function ProblemPanel({ problems } : Props) {
    const [q, setQ] = useState("");

    const normalize = (s: string) =>
    s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");

    const filtered = problems
    .filter(p => {
        const qn = normalize(q);
        return (
        normalize(p.name).includes(qn) ||
        normalize(p.url).includes(qn)
        );
    })
    .slice(0, 5);


    return(
        <>
            <h1 className="title">
                PROBLEMS
            </h1>
            
            {/* Create problem */}
            <h2 className="subtitle">
                Create Problem
            </h2>

            <form action={createProblem}>
                <input
                    name="name"
                    placeholder="Problem Name"
                    required
                />

                <input
                    name="url"
                    placeholder="codeforces.com/problem/4/A"
                    required
                />
                <button type="submit">Create Problem</button>
            </form>
            
            <h2 className="subtitle">
                Edit Problem
            </h2>

            <input
                type="text"
                placeholder="search problems…"
                value={q}
                onChange={e => setQ(e.target.value)}
            />

            <div>
                {filtered.map(p => (
                    <AdminProblemDisplay
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        url={p.url}
                    />
                ))}
            </div>
            {/* Edit problem name */}
            {/* Edit problem URL */}
            {/* Delete problem */}
            {/* View user solves per problem */}
        </>
    )
}

export default ProblemPanel;