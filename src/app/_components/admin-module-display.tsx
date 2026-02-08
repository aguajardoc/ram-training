"use client"
import type { ModuleProblemRow } from "../admin/types";
import { useState } from "react";
import { updateModule } from "../admin/actions";
import { deleteModule } from "../admin/actions";
import { createModuleProblem } from "../admin/actions";
import { duplicateModule } from "../admin/actions";
import AdminModuleProblemDisplay from "./admin-module-problem-display";
import type { Problem } from "generated/prisma";

type Props = {
    id: string,
    name: string,
    launchDate: Date,
    hidden: Boolean,
    moduleProblems: ModuleProblemRow[],
    problems: Problem[],
};

function AdminModuleDisplay({ id, name, launchDate, hidden, moduleProblems, problems } : Props) {
    const formatDate = (d: Date) =>
    d.toISOString().slice(0, 16);

    const [editing, setEditing] = useState(false);
    const [adding, setAdding] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newLaunchDate, setNewLaunchDate] = useState(formatDate(launchDate));
    const [newHiddenState, setNewHiddenState] = useState<boolean>(Boolean(hidden));
    const [query, setQuery] = useState("");
    const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

    const filtered = problems.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 2);


    return (
        <div className="card">
            {!editing ? (
                !adding ? (
                    <div>
                        {name}
                    {/* Add problems to module */}
                    <button onClick={() => setAdding(true)}>
                        Add Problem
                    </button>
                        
                    {/* Edit Module Settings */}
                    <button onClick={() => setEditing(true)}>
                        Edit Module
                    </button>

                    {/* Delete module */}
                    <button onClick={() => {
                        if(!confirm("Delete this module?")) return
                        deleteModule(id);
                    }}>
                        Delete
                    </button>

                    {/* Duplicate module */}
                    <button onClick={() => {
                        if(!confirm("Duplicate this module?")) return
                        duplicateModule(id);
                    }}>
                        Duplicate
                    </button>

                    {/* Settings per Problem */}
                    {moduleProblems.map(mp => (
                        <AdminModuleProblemDisplay
                            key={mp.id}
                            id={mp.id}
                            name={mp.problem.name}
                            difficulty={mp.difficulty}
                            order={mp.order}
                            problemType={mp.problemType}
                        />
                        ))
                    }
                            
                    </div>
                ) :
                (
                    <div>
                        <form action={createModuleProblem}>
                            <input type="hidden" name="moduleId" value={id} />
                            
                            <input
                                type="hidden"
                                name="problemId"
                                value={selectedProblem?.id ?? ""}
                            />

                            <input
                                placeholder="Search problem..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />

                            <div className="search-results">
                                {filtered.map(p => (
                                <div
                                    key={p.id}
                                    onClick={() => {
                                    setSelectedProblem(p);
                                    setQuery(p.name);
                                    }}
                                    className={p.id === selectedProblem?.id ? "selected" : ""}
                                >
                                    {p.name}
                                </div>
                                ))}
                            </div>

                            <select name="problemType" required>
                                <option value="CONTEST">Contest</option>
                                <option value="PRACTICE">Practice</option>
                            </select>

                            <select name="difficulty" required>
                                <option value="EASY">Easy</option>
                                <option value="NORMAL">Normal</option>
                                <option value="HARD">Hard</option>
                            </select>

                            <button type="submit">Add</button>
                            <button type="button" onClick={() => setAdding(false)}>Cancel</button>
                        </form>
                    </div>
                )
            ) : (
            <div>
                {/* Rename module */}
                <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />

                {/* Set launch date */}
                <input
                    type="datetime-local"
                    value={newLaunchDate}
                    onChange={(e) => setNewLaunchDate(e.target.value)}
                />

                {/* Hide module */}
                {"hide?"}
                <input
                    type="checkbox"
                    checked={newHiddenState}
                    onChange={(e) => setNewHiddenState(e.target.checked)}
                />
                <form action={updateModule}>
                    <input type="hidden" name="id" value={id}/>
                    <input type="hidden" name="name" value={newName}/>
                    <input type="hidden" name="launchDate" value={newLaunchDate}/>
                    <input type="hidden" name="hidden" value={newHiddenState ? "true" : "false"}/>


                    <button type="submit">Save</button>
                    <button type="button"
                        onClick={() => setEditing(false)}>
                        Cancel
                    </button>
                </form>

            </div>)
            }
        </div>
    )
}

export default AdminModuleDisplay;