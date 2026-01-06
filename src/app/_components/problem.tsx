"use client"
import { useState } from "react";
import InputField from "./input-field"
import ProblemName from "./problem-name";
import SolvedField from "./solved-field";
import SelfcheckField from "./selfcheck-field";

const fields = ["Reading", "Thinking", "Coding", "Debugging"];
type ValueKey = "submissions" | "reading" | "thinking" | "coding" | "debugging";

type Props = {
    problemType: string,
    problemName: string,
    problemURL: string,
};

function Problem({ problemType, problemName, problemURL } : Props) {
    const [counts, setCounts] = useState<Record<ValueKey, number>>({
        submissions: 0,
        reading: 0,
        thinking: 0,
        coding: 0,
        debugging: 0,
    })

    const setCount = (key: ValueKey, val: Number) => setCounts(t => ({ ...t, [key]: val }));
    const totalTime = 
        counts.reading + 
        counts.thinking + 
        counts.coding + 
        counts.debugging;

    return (
    <div>
        <div className="problem">
            {/* Problem Name */}
            <ProblemName
                problemName={problemName}
                problemURL={problemURL}
            />

            {/* Solved Field */}
            <SolvedField
                problemType={problemType}    
            />

            {/* Comments */}

            {/* Submit Count Field */}
            <InputField
                fieldType={"Submissions"}
                value={counts["submissions"]}
                onChange={v => setCount("submissions", v)}
            />

            {/* Time-tracking Fields */}
            {fields.map(f => {
                const key = f.toLowerCase() as ValueKey;
                
                return (
                    <InputField
                        key={f}
                        fieldType={f}
                        value={counts[key]}
                        onChange={v => setCount(key, v)}
                    />
                );
            })}
            

            {/* Total Time Field */}
            <InputField
                fieldType={"Total"}
                value={totalTime}
                editable={false}
            />

            {/* On Your Own Dropdown */}
            <SelfcheckField/>            
        </div>
    </div>
    )
}

export default Problem