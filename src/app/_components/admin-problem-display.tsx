import { deleteProblem, updateProblem } from "../admin/actions";
import { useState } from "react";

type Props = {
    id: string,
    name: string,
    url: string,
};

function AdminProblemDisplay({ id, name, url } : Props) {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newUrl, setNewUrl] = useState(url);

    return (
        <>
            <div className="card">
                 {!editing ? (
            <>
            <div className="edit-item">{name}</div>|
            <div className="edit-item">{url}</div>

            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => {
                if(!confirm("Delete this problem?")) return;
                deleteProblem(id);
            }}
            >
                Delete
            </button>
            </>
      ) : (
        <>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />

          <form action={updateProblem}>
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="name" value={newName} />
            <input type="hidden" name="url" value={newUrl} />

            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </form>
        </>
      )}
            </div>
        </>
    )
}

export default AdminProblemDisplay;