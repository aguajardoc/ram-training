import { deleteProblem, updateProblem } from "../admin/actions";
import { useState } from "react";
import type { SolveUser } from "../admin/types";
import SolvesList from "./solves-list";

type Props = {
  id: string,
  name: string,
  url: string,
  solves: SolveUser[],
};

function AdminProblemDisplay({ id, name, url, solves }: Props) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newUrl, setNewUrl] = useState(url);
  const [viewingSolves, setViewingSolves] = useState(false);

  return (
    <>
      <div className="card">
        {!editing ? (
          !viewingSolves ? (
            <>
              <div className="edit-item">{name}</div>|
              <div className="edit-item">{url}</div>

              {/* Edit Problem */}
              <button onClick={() => setEditing(true)}>Edit</button>

              {/* Delete Problem */}
              <button onClick={() => {
                if (!confirm("Delete this problem?")) return;
                deleteProblem(id);
              }}
              >
                Delete
              </button>

              {/* View User Solves */}
              <button onClick={() => setViewingSolves(true)}>View Solves</button>

            </>
          ) : (
            <>
              <SolvesList solves={solves} />
              <button onClick={() => setViewingSolves(false)}>Return</button>
            </>
          )
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