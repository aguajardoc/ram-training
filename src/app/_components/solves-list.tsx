import type { SolveUser } from "../admin/types";
import SolveElement from "./solve-element";

type Props =  {
    solves: SolveUser[],
};

function SolvesList({ solves } : Props) {
    return (
        <>
            {solves.map(s => (
                <SolveElement
                key={s.id}
                name={s.user.name}
                />
            ))}
        </>
    )
}

export default SolvesList;