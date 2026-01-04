type Props = {
    problemType: string
};

const OPTIONS: Record<string, string[]> = {
    practice: ["NO", "YES"],
    contest: ["NO", "In Contest", "Upsolved"],
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