import type { TrackLevel, Track } from "generated/prisma";
import { createLevel } from "../admin/actions";
import { useState } from "react";
import AdminLevelDisplay from "./admin-level-display";

type Props = {
    levels: TrackLevel[],
    tracks: Track[],
};

function LevelPanel({ levels, tracks } : Props) {
    const [q, setQ] = useState("");
    
    const trackMap = Object.fromEntries(tracks.map(t => [t.id, t.name]));

    const normalize = (s: string) =>
    s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");

    const filtered = levels
    .filter(p => {
        const qn = normalize(q);
        return (
        normalize(p.code).includes(qn) ||
        normalize(trackMap[p.trackId] ?? "").includes(qn)
        );
    })
    .slice(0, 3);


    return (
        <>
            <h1 className="title">
                LEVELS
            </h1>

            {/* Create Level */}
            <h2 className="subtitle">
                Create Level
            </h2>
            <form action={createLevel}>
                <input
                    name="code"
                    placeholder="Level Code"
                    required
                />

                <select name="trackId" required>
                    {tracks.map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                </select>

                <button type="submit">Create Level</button>
            </form>

            {/* Add Modules to Level */}
            <h2 className="subtitle">
                Edit Level
            </h2>

            <input
                type="text"
                placeholder="search levels..."
                value={q}
                onChange={e => setQ(e.target.value)}
            />

            {filtered.map(l => (
                <AdminLevelDisplay
                    key={l.id}
                    code={l.code}
                    trackId={l.trackId}
                    trackName={trackMap[l.trackId]}
                />
            ))}
        </>
    )
}

export default LevelPanel;