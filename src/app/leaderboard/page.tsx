"use client"
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

function Leaderboard() {
    const { data:session } = useSession();

    if (!session) redirect("\sign-in")

    return (
        <>
        <h1>67</h1>
        </>
    )
}

export default Leaderboard;