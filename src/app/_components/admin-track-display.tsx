"use client"
import { useState } from "react";
import { deleteTrack, updateTrackName, deleteUserFromTrack, addUserToTrack } from "../admin/actions";
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
        normalize(u.name ?? "anonymous").includes(qn)
        );
    })
    .slice(0, 1);

    return (
        <>
            {!editing && !viewingUsers && (
                <div className="card">
                {name}

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
                    <input
                        type="text"
                        placeholder="search users…"
                        value={q}
                        onChange={e => setQ(e.target.value)}
                    />
                    {filtered.map(u => (
                        <div key={u.id}>
                            {u.name}

                            {/* Add User to Track */}
                            <button
                                onClick={() => {
                                    addUserToTrack(u.id, id);
                                }}
                            >
                                Add User to Track
                            </button>

                            {/* Delete User from Track */}
                            <button
                                onClick={() => {
                                if (!confirm("Delete this user from this track?")) return;
                                    deleteUserFromTrack(u.id, id);
                                }}
                            >
                                Delete User from Track
                            </button>
                        </div>
                    ))}

                
                    <button onClick={() => setViewingUsers(false)}>Back</button>
                </div>
            )}
        </>

    );
}

export default AdminTrackDisplay;