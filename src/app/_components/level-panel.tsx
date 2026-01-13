import type { TrackLevel } from "generated/prisma";

type Props = {
    levels: TrackLevel[],
};

function LevelPanel({ levels } : Props) {
    return (
        <>
            <h1 className="title">
                LEVELS
            </h1>
        </>
    )
}

export default LevelPanel;