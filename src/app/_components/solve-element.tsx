import "../../styles/admin.css"

type Props = {
    name: string | null,
}

function SolveElement({ name } : Props) {
    return (
        <div className="solve-element">
            {name}
        </div>
    )
}

export default SolveElement;