"use client"
import { useState } from "react";
import { deleteTrackLevel, addModuleToLevel, deleteModuleFromLevel } from "../admin/actions";
import type { ModuleRow } from "../admin/types";

type Props = {
    code: string,
    levelId: string,
    trackId: string,
    trackName: string | undefined,
    modules: ModuleRow[],
}

function AdminLevelDisplay({ code, levelId, trackId, trackName, modules } : Props) {
    const [editing, setEditing] = useState(false);
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

    return (
        <>
            {!editing && (
                <div className="card">
                    <div>{code}</div>
                    <div>[ {trackName} ]</div>

                    {/* Edit Level Modules */}
                    <button onClick={() => setEditing(true)}>Edit Modules</button>

                    {/* Delete */}
                    <button onClick={() => {
                        if (!confirm("Delete this Level?")) return;
                        deleteTrackLevel(levelId);
                    }
                    }>
                        Delete
                    </button>
                </div>
            )}

            {editing && (
                <div className="card">
                    <input
                        type="text"
                        placeholder="search modules..."
                        value={q}
                        onChange={e => setQ(e.target.value)}
                    />

                    {filtered.map(m => 
                        <div key={m.id}>
                            <div>{m.name}</div>
                            <form action={addModuleToLevel}>
                                <input name="moduleId" value={m.id} type="hidden"></input> 
                                <input name="trackLevelId" value={levelId} type="hidden"></input> 

                                <button type="submit">Add Module</button>
                            </form>

                            <form action={deleteModuleFromLevel}>
                                <input name="moduleId" value={m.id} type="hidden"></input> 
                                <input name="trackLevelId" value={levelId} type="hidden"></input> 

                                <button type="submit">Delete Module</button>
                            </form>
                        </div>
                    )}

                    <button onClick={() => setEditing(false)}>Back</button>
                </div>
            )}

        </>
    )
}

export default AdminLevelDisplay;