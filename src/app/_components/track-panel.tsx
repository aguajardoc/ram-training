import type { Track } from "generated/prisma";

type Props = {
    tracks: Track[],
};

function TrackPanel({ tracks } : Props) {
    return(
        <>
            <h1 className="title">
                TRACKS
            </h1>
            {/* TRACK ACTIONS */}
                {/* Add user to track */}
                {/* Remove user from track */}
                {/* Create track */}
                {/* Delete track */}
                {/* Edit track name */}
                {/* Add modules to track */}
                {/* Reorganize modules in track */}
        </>
    )
}

export default TrackPanel;