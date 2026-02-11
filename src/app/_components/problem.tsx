"use client"
import { useState } from "react";
import InputField from "./input-field"
import ProblemName from "./problem-name";
import SolvedField from "./solved-field";
import SelfcheckField from "./selfcheck-field";

import '../../styles/problem.css'
import { ProblemDifficulty, type ProblemType, type Solve } from "generated/prisma";
import { saveSolve } from "../train/actions";

type ProblemProps = {
    problemId: string,
    problemType: ProblemType,
    problemName: string,
    problemURL: string,
    problemDifficulty: ProblemDifficulty,
    solveData: Solve[],
};

type IconProps = {
    onClick?: () => void,
    classModifier: string,
}

const colorMap: Record<string, string> = {
    easy: "#64ff83",
    normal: "#646cff",
    hard: "#ff7664",
};

const CommentsIcon = ({ onClick, classModifier } : IconProps) => {
    return (
    <button 
    className="icon-btn" 
    onClick={onClick}
    aria-label="View Comments" // Important for screen readers
    type="button"
  >
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="26" 
        height="26" 
        
        fill={colorMap[classModifier]}
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
)};

const SaveIcon = ({ onClick, classModifier }: IconProps) => (
  <button 
    className="icon-btn save-btn" 
    onClick={onClick}
    type="submit"
    style={{ color: colorMap[classModifier] }} 
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="28" 
      height="28"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L18 3.586A2 2 0 0 0 16.586 3zm10 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0M8 7V5h8v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

const fields = ["Read", "Think", "Code", "Debug"];
type ValueKey = "submissions" | "read" | "think" | "code" | "debug" | "perceivedDifficulty";

function Problem({ problemId, problemType, problemName, problemURL, problemDifficulty, solveData } : ProblemProps) {
    const solve = solveData?.[0];

    const [commenting, setCommenting] = useState(false);
    const [values, setValues] = useState<Record<ValueKey, number>>({
        submissions: solve?.submitCount ?? 0,
        read: solve?.readTimeMinutes ?? 0,
        think: solve?.thinkTimeMinutes ?? 0,
        code: solve?.codeTimeMinutes ?? 0,
        debug: solve?.debugTimeMinutes ?? 0,
        perceivedDifficulty: solve?.perceivedDifficulty ?? 0,
    });

    const [solvedStatus, setSolvedStatus] = useState(solve?.statusString ?? "NO");
    const [onYourOwn, setOnYourOwn] = useState(solve?.onYourOwn ?? true);

    const setValue = (key: ValueKey, val: number) => setValues(t => ({ ...t, [key]: val }));
    let totalTime = 
        values.read + 
        values.think + 
        values.code + 
        values.debug;

    const handleClick = () => setCommenting(true);

    const classModifier = String(problemDifficulty).toLowerCase();

    return (
    <div>
        {/* Change problem color based on difficulty */}
        <div className={`problem ${classModifier}`}>
            {/* Problem Name */}
            <ProblemName
                problemName={problemName}
                problemURL={problemURL}
                problemDifficulty={problemDifficulty}
            />

            {/* Solved Field */}
            <SolvedField
                problemType={problemType}
                value={solvedStatus}
                onChange={setSolvedStatus}  
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
                        fieldType={`${f}`}
                        value={values[key]}
                        onChange={v => setValue(key, v)}
                        lowerBound={0}
                        upperBound={10000}
                    />
                );
            })}
            

            {/* Total Time Field */}
            <InputField
                fieldType={"Total"}
                value={totalTime}
                editable={false}
                lowerBound={0}
                upperBound={100000}
            />

            {/* "On Your Own" Dropdown */}
            <SelfcheckField
                value={onYourOwn}
                onChange={setOnYourOwn}
            /> 

            {/* Perceived Difficulty Level */}
            <InputField
                fieldType={"Difficulty"}
                value={values["perceivedDifficulty"]}
                onChange={v => setValue("perceivedDifficulty", v)}
                lowerBound={0}
                upperBound={10}
            />

            {/* Comments */}
            {/* <CommentsIcon 
                onClick={handleClick}
                classModifier={classModifier}
            /> */}

            {/* Save Entry */}
            <form action={saveSolve}>
                <input name="statusString" type="hidden" value={solvedStatus}></input>
                <input name="problemId" type="hidden" value={problemId} />
                
                <input name="submitCount" type="hidden" value={values.submissions}></input>
                <input name="readTimeMinutes" type="hidden" value={values.read}></input>
                <input name="thinkTimeMinutes" type="hidden" value={values.think}></input>
                <input name="codeTimeMinutes" type="hidden" value={values.code}></input>
                <input name="debugTimeMinutes" type="hidden" value={values.debug}></input>
                <input name="onYourOwn" type="hidden" value={String(onYourOwn)}></input>
                <input name="perceivedDifficulty" type="hidden" value={values.perceivedDifficulty}></input>

                <SaveIcon
                    classModifier={classModifier}
                />
            </form>
        </div>
    </div>
    );
}

export default Problem;