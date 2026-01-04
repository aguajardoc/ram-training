import "../../styles/problem.css"

type Props = {
    problemName: string
    problemURL: string
};

function ProblemName({ problemName, problemURL } : Props) {
    
    return (
        <div className="problem-name-wrapper">
            <a className="problem-name" href={problemURL}>
                {problemName}
            </a>
        </div>
    )
}

export default ProblemName