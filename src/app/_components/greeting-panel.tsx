import "../../styles/globals.css"

function GreetingPanel() {
    return (
        <>
            <h1 className="title">
                GREETING
            </h1>
            
            {/* Change Level-Track Correspondence */}
            {/* Hardcoded because I firmly believe 3 levels is enough */}
            <div className="card">
                <div>Level A:</div>

            </div>

            <div className="card">
                <div>Level B:</div>

            </div>

            <div className="card">
                <div>Level C1:</div>

            </div>
        </>
    )
}

export default GreetingPanel;