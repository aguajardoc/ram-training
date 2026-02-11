import type { ProblemType } from "generated/prisma";

type Props = {
    problemType: ProblemType,
    value: string,
    onChange: (val: string) => void,
};

const OPTIONS: Record<string, string[]> = {
    PRACTICE: ["NO", "YES", "YES (before)"],
    CONTEST: ["NO", "YES (Contest)", "YES (Upsolve)", "YES (Before)"],
};

function SolvedField({ problemType, value, onChange } : Props) {
    const options = OPTIONS[problemType] || ["YES"];

    return (
        <div>
            <div className="field-title">
                Solved?
            </div>
            
            <select 
                className="select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
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