"use client"
import { useState } from "react";
import InputField from "./input-field"
import ProblemName from "./problem-name";
import SolvedField from "./solved-field";
import SelfcheckField from "./selfcheck-field";

import '../../styles/problem.css'
import type { ProblemDifficulty, ProblemType } from "generated/prisma";

type ProblemProps = {
    problemType: ProblemType,
    problemName: string,
    problemURL: string,
    problemDifficulty: ProblemDifficulty,
};

type IconProps = {
    onClick?: () => void,
}

const CommentsIcon = ({ onClick } : IconProps) => (
    <button 
    className="icon-btn" 
    onClick={onClick}
    aria-label="View Comments" // Important for screen readers
    type="button"
  >
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        
        fill="#646cff" 
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
        <path 
        d="m4 18l2-2h14V4H4z" 
        />
        
        <path 
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z" 
        />
    </svg>
  </button>
);

const fields = ["Read", "Think", "Code", "Debug"];
type ValueKey = "submissions" | "reading" | "thinking" | "coding" | "debugging" | "perceivedDifficulty";

function Problem({ problemType, problemName, problemURL } : ProblemProps) {
    const [commenting, setCommenting] = useState(false);
    const [values, setValues] = useState<Record<ValueKey, number>>({
        submissions: 0,
        reading: 0,
        thinking: 0,
        coding: 0,
        debugging: 0,
        perceivedDifficulty: 0,
    });

    const setValue = (key: ValueKey, val: Number) => setValues(t => ({ ...t, [key]: val }));
    const totalTime = 
        values.reading + 
        values.thinking + 
        values.coding + 
        values.debugging;

    const handleClick = () => setCommenting(true);

    return (
    <div>
        {/* Change problem color based on difficulty */}
        <div className="problem">
            {/* Problem Name */}
            <ProblemName
                problemName={problemName}
                problemURL={problemURL}
            />

            {/* Solved Field */}
            {/* Fix this! */}
            <SolvedField
                problemType={problemType}    
            />

            {/* Submit Count Field */}
            <InputField
                fieldType={"Submits"}
                value={values["submissions"]}
                onChange={v => setValue("submissions", v)}
                lowerBound={0}
                upperBound={10000}
            />

            {/* Time-tracking Fields */}
            {fields.map(f => {
                const key = f.toLowerCase() as ValueKey;
                
                return (
                    <InputField
                        key={f}
                        fieldType={f}
                        value={values[key]}
                        onChange={v => setValue(key, v)}
                        lowerBound={0}
                        upperBound={10000}
                    />
                );
            })}
            

            {/* Total Time Field */}
            <InputField
                fieldType={"Total Time"}
                value={totalTime}
                editable={false}
                lowerBound={0}
                upperBound={100000}
            />

            {/* On Your Own Dropdown */}
            <SelfcheckField/> 

            {/* Perceived Difficulty Level */}
            <InputField
                fieldType={"Difficulty"}
                value={values["perceivedDifficulty"]}
                onChange={v => setValue("perceivedDifficulty", v)}
                lowerBound={0}
                upperBound={10}
            />

            {/* Comments */}
            <CommentsIcon onClick={handleClick}/>
        </div>
    </div>
    )
}

export default Problem