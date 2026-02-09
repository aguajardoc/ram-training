"use client"
import { useState } from "react";
import InputField from "./input-field"
import ProblemName from "./problem-name";
import SolvedField from "./solved-field";
import SelfcheckField from "./selfcheck-field";

import '../../styles/problem.css'
import type { ProblemDifficulty } from "generated/prisma";

type ProblemProps = {
    problemType: string,
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
        // 1. Force pure white instead of inheriting text color
        fill="#646cff" 
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
        {/* 2. Removed opacity=".3" here. 
        Now the inner part is solid white, making it much brighter.
        */}
        <path 
        d="m4 18l2-2h14V4H4z" 
        />
        
        {/* Outer Outline */}
        <path 
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z" 
        />
    </svg>
  </button>
);

const fields = ["Read", "Think", "Code", "Debug"];
type ValueKey = "submissions" | "reading" | "thinking" | "coding" | "debugging";

function Problem({ problemType, problemName, problemURL } : ProblemProps) {
    const [commenting, setCommenting] = useState(false);
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
                fieldType={"Total Time"}
                value={totalTime}
                editable={false}
            />

            {/* On Your Own Dropdown */}
            <SelfcheckField/> 

            {/* Perceived Difficulty Level */}
            <InputField
                fieldType={"Difficulty (0-10)"}
                value={totalTime}
            />

            {/* Comments */}
            <CommentsIcon onClick={handleClick}/>
        </div>
    </div>
    )
}

export default Problem