import type { UserRow } from "../admin/types";
import "../../styles/globals.css"
import { useState } from "react";

import { deleteUser } from "../admin/actions";

type Props = {
    users: UserRow[],
};

function UserPanel({ users } : Props) {
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
            <h1 className="title">
                USERS
            </h1>

            <h2 className="subtitle">
                Search Users
            </h2>

            {/* List Users */}

            {/* Search by email/name */}
            <input
                type="text"
                placeholder="search users..."
                value={q}
                onChange={e => setQ(e.target.value)}
            />

            
            {filtered.map(u => (
                <div key={u.id}>
                    {/* Show Solve Count */}
                    <div className="text">
                        {u.name ?? "anonymous"} has {u._count.solves} solves.
                    </div>

                    {/* Delete user */}
                    <button onClick={() => {
                        if (!confirm("Delete this user?")) return;
                        deleteUser(u.id);
                        }}
                    >
                    Delete
                    </button>
                </div>
            ))}
        </>
    )
}

export default UserPanel;