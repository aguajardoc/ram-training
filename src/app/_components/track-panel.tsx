"use client"
import type { Track } from "generated/prisma";
import { createTrack, deleteTrack } from "../admin/actions";
import { useState } from "react";
import AdminTrackDisplay from "./admin-track-display";
import type { UserRow } from "../admin/types";

type Props = {
    tracks: Track[],
    users: UserRow[],
};

function TrackPanel({ tracks, users } : Props) {
    const [q, setQ] = useState("");
    
    const normalize = (s: string) =>
    s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");

    const filtered = tracks
    .filter(p => {
        const qn = normalize(q);
        return (
        normalize(p.name).includes(qn)
        );
    })
    .slice(0, 3);

    return(
        <>
            <h1 className="title">
                TRACKS
            </h1>

            {/* Create Track */}
            <h2 className="subtitle">
                Create Track
            </h2>
            <form action={createTrack}>
                <input
                    name="name"
                    placeholder="Track Name"
                    required
                />

                <button type="submit">Create Track</button>
            </form>

            <h2 className="subtitle">
                Edit Track
            </h2>

            <input
                type="text"
                placeholder="search tracks..."
                value={q}
                onChange={e => setQ(e.target.value)}
            />

            {filtered.map(t => (
                <AdminTrackDisplay
                    key={t.id}
                    id={t.id}
                    name={t.name}
                    users={users}
                />
            ))}
        </>
    )
}

export default TrackPanel;