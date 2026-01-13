import type { UserRow } from "../admin/types";
import "../../styles/globals.css"

type Props = {
    users: UserRow[],
};

function UserPanel({ users } : Props) {
    return (
        <>
            <h1 className="title">
                USERS
            </h1>

            {/* USER ACTIONS */}

                {/* List Users */}

                {users.map(u => (
                    <div key={u.id}>
                        {u.email}
                    </div>
                ))}


                {/* Search by email/name */}
                    {/* Solve Count */}
                    {/* Last Login */}
                    {/* Recent ACs */}
                
                    {/* Nuke user sessions */}
                
                    {/* Delete user */}
                {/* View Solves per user */}
        </>
    )
}

export default UserPanel;