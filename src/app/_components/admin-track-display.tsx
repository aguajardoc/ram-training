import { useState } from "react";
import { deleteTrack, updateTrackName } from "../admin/actions";

type Props = {
    name: string,
    id: string,
};

function AdminTrackDisplay({ name, id } : Props) {
    const [editing, setEditing] = useState(false);

    return (
        <>
                {!editing ? (
                    <div className="card">
                        {name}
                    
                        {/* Add user to track */}
                        {/* Remove user from track */}
                        
                        {/* Delete track */}
                        <button onClick={() => {
                            if (!confirm("Delete this track?")) return;
                            deleteTrack(id);
                        }}>Delete Track</button>

                        {/* Edit track name */}
                        <button onClick={() => {
                            setEditing(true)
                        }}>Edit Name</button>
                        {/* Add modules to track */}
                        {/* Reorganize modules in track */}
                    </div>
                ) : (
                    <div className="card">
                        <form action={updateTrackName}>
                            <input
                                name="name"
                                placeholder={name}
                                required
                            />
                            <input type="hidden" name="id" value={id}></input>


                            <button type="submit">Save</button>
                        </form>

                        <button onClick={() => {
                            setEditing(false)
                        }}>Cancel</button>
                    </div>
                )
                }
        </>
    );
}

export default AdminTrackDisplay;