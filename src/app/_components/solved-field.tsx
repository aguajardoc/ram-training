import type { ProblemType } from "generated/prisma";

type Props = {
    problemType: ProblemType,
};

const OPTIONS: Record<string, string[]> = {
    PRACTICE: ["NO", "YES", "YES (before)"],
    CONTEST: ["NO", "In Contest", "Upsolved", "YES (before)"],
};

function SolvedField({ problemType } : Props) {
    const options = OPTIONS[problemType];

    return (
        <div>
            <div className="field-title">
                Solved?
            </div>
            
            <select className="select">
                {options?.map(o => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SolvedField;