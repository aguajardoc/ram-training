"use client"
import { useState } from "react";
import { createModule } from "../admin/actions";
import AdminModuleDisplay from "./admin-module-display";
import type { ModuleRow } from "../admin/types";
import type { Problem } from "generated/prisma";

type Props = {
    modules: ModuleRow[],
    problems: Problem[],
};

function ModulePanel({ modules, problems } : Props) {
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
    .slice(0, 3);

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
                
            {filtered.map(m => (
                <AdminModuleDisplay
                    key={m.id}
                    id={m.id}
                    name={m.name}
                    launchDate={m.launchDate}
                    hidden={m.hidden}
                    moduleProblems={m.moduleProblems}
                    problems={problems}
                />
            ))}
        </>
    )
}

export default ModulePanel;