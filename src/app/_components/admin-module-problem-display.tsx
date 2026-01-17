import { deleteModuleProblem } from "../admin/actions";
import { changeDifficulty } from "../admin/actions";

type Props = {
    id: string,
    name: string,
    difficulty: string,
    order: number,
    problemType: string,
};

function AdminModuleProblemDisplay({ id, name, difficulty, order, problemType} : Props) {
    return (
        <div>
            {name}, Difficulty: {difficulty}
            {/* Remove problems from module */}
            <button onClick={() => {
                if(!confirm("Remove this problem?")) return;
                deleteModuleProblem(id);
            }}>
                Remove
            </button>
            
            {/* Edit difficulty parameters per problem */}
            {/* Horrible UX, but I'm the only one here :) */}
            <button onClick={() => {
                if(!confirm("Change to Easy?")) return;
                changeDifficulty(id, 0);
            }}>
                Make Easy
            </button>

            <button onClick={() => {
                if(!confirm("Change to Normal?")) return;
                changeDifficulty(id, 1);
            }}>
                Make Normal
            </button>

            <button onClick={() => {
                if(!confirm("Change to Hard?")) return;
                changeDifficulty(id, 2);
            }}>
                Make Hard
            </button>
        </div>
    )
}

export default AdminModuleProblemDisplay;