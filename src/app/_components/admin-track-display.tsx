import { useState } from "react";
import { deleteTrack, updateTrackName } from "../admin/actions";
import type { UserRow } from "../admin/types";

type Props = {
    name: string,
    id: string,
    users: UserRow[],
};

function AdminTrackDisplay({ name, id, users } : Props) {
    const [editing, setEditing] = useState(false);
    const [viewingUsers, setViewingUsers] = useState(false);
    const [q, setQ] = useState("");
        
    const normalize = (s: string) =>
    s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");

    const filtered = users
    .filter(u => {
        const qn = normalize(q);
        return (
        normalize(u.name ?? "").includes(qn)
        );
    })
    .slice(0, 3);

    return (
        <>
            {!editing && !viewingUsers && (
                <div className="card">
                {name}

                {/* Add user to track */} 
                {/* Remove user from track */}
                {/* View and Edit Users */}
                <button onClick={() => setViewingUsers(true)}>View Users</button>

                {/* Delete Track */}
                <button
                    onClick={() => {
                    if (!confirm("Delete this track?")) return;
                    deleteTrack(id);
                    }}
                >
                    Delete Track
                </button>

                {/* Edit Track Name */}
                <button onClick={() => setEditing(true)}>Edit Name</button>

                {/* Add modules to track */} 
                {/* Reorganize modules in track */}

                </div>
            )}

            {editing && (
                <div className="card">
                <form action={updateTrackName}>
                    <input name="name" placeholder={name} required />
                    <input type="hidden" name="id" value={id} />
                    <button type="submit">Save</button>
                </form>

                <button onClick={() => setEditing(false)}>Cancel</button>
                </div>
            )}

            {viewingUsers && (
                <div className="card">
                    {filtered.map(u => (
                        <div key={u.id}>
                            {u.name}
                        </div>
                    ))}

                
                    <button onClick={() => setViewingUsers(false)}>Back</button>
                </div>
            )}
        </>

    );
}

export default AdminTrackDisplay;