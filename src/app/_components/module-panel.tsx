import type { Module } from "generated/prisma";
import { useState } from "react";
import { createModule } from "../admin/actions";

type Props = {
    modules: Module[],
};

function ModulePanel({ modules } : Props) {
    const [q, setQ] = useState("");
    
    const normalize = (s: string) =>
    s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");

    const filtered = modules
    .filter(m => {
        const qn = normalize(q);
        return (
        normalize(m.name).includes(qn)
        );
    })
    .slice(0, 5);
    return(
        <>
            <h1 className="title">
                MODULES
            </h1>
            
            <h2 className="subtitle">
                Create Module
            </h2>

            {/* Create module */}
            <form action={createModule}>
                <input
                    name="name"
                    placeholder="Module Name"
                    required
                />

                <input
                    type="datetime-local"
                    name="launch-date"
                    required
                />

                <input
                    type="checkbox"
                    name="hidden"
                    required
                />

                <button type="submit">Create Module</button>
            </form>
            
            <h2 className="subtitle">
                Edit Module
            </h2>

            <input
                type="text"
                placeholder="search modules…"
                value={q}
                onChange={e => setQ(e.target.value)}
            />
                
            {/* Add problems to module */}
            {/* Remove problems from module */}
            {/* Hide problems from module */}
            {/* Edit difficulty parameters per problem */}
            {/* Reorder problems */}
            {/* Set launch date */}
            {/* Rename module */}
            {/* Delete module */}
            {/* Hide module */}
        </>
    )
}

export default ModulePanel;