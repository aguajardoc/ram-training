import { count } from "console";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

import "../../styles/leaderboard.css"
import "../../styles/globals.css"

import LeaderboardEntry from "../_components/leaderboard-entry";

async function Leaderboard() {
    const session = await auth();
    if (!session) redirect("\sign-in")


    const rawCounts = await db.user.findMany({
        orderBy: 
            {solves: {
                _count: "desc",
                
            },
        },
        include: {
            _count: {
                select: {
                    solves: {
                        where: {
                            statusString: {
                                not: "NO"
                            }
                        }
                    }
                },
            },
        },
        take: 50,
    });

    const users = rawCounts.sort((a, b) => (b._count.solves - a._count.solves));

    return (
        <div className="page">
            {/* Title */}
            <h1 className="title">
                LEADERBOARD
            </h1>

            {/* Display Top Bar */}
            <div className="leaderboard-cols">
                <div>Place</div>
                <div>Name</div>
                <div>Solves</div>
            </div>
            
            {/* Display users */}
            {users.map((u, i) => (
            <div key={u.id}>
                <LeaderboardEntry
                    key={u.id}
                    name={u.name}
                    place={i} // 0-index because we are programmers haha get it
                    solveCount={u._count.solves}
                />
            </div>
            ))}
        </div>
    );

}

export default Leaderboard;