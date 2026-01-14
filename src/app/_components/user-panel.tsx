import type { UserRow } from "../admin/types";
import "../../styles/globals.css"
import { useState } from "react";

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
    .slice(0, 5);

    return (
        <>
            <h1 className="title">
                USERS
            </h1>

            <h2 className="subtitle">
                Search Users
            </h2>

            {/* USER ACTIONS */}

                {/* List Users */}

                {/* Search by email/name */}
                <input
                    type="text"
                    placeholder="search users..."
                    value={q}
                    onChange={e => setQ(e.target.value)}
                />

                {filtered.map(u => (
                    <div className="text" key={u.id}>
                        {u.name}
                    </div>
                ))}
                    {/* Solve Count */}
                    {/* Last Login */}
                    {/* Recent ACs */}
                
                    {/* Nuke user sessions */}
                
                    {/* Delete user */}
                {/* View Solves per user */}
        </>
    )
}

export default UserPanel;