import type { TrackLevel } from "generated/prisma";
import { createLevel } from "../admin/actions";

type Props = {
    levels: TrackLevel[],
};

function LevelPanel({ levels } : Props) {
    return (
        <>
            <h1 className="title">
                LEVELS
            </h1>

            {/* Add Modules to Level */}
            <h2 className="subtitle">
                Add Modules to Level
            </h2>
        </>
    )
}

export default LevelPanel;