import type { ProblemDifficulty } from "generated/prisma";
import "../../styles/problem.css"

type Props = {
    problemName: string
    problemURL: string
    problemDifficulty: ProblemDifficulty,
};

function ProblemName({ problemName, problemURL, problemDifficulty } : Props) {
    const classModifier = String(problemDifficulty).toLowerCase();
    
    return (
        <div className={`problem-name-wrapper ${classModifier}`}>
            <a 
                className="problem-name" 
                href={problemURL}
                target="_blank"
                rel="noopener noreferrer"
            >
                {problemName}
            </a>
        </div>
    )
}

export default ProblemName