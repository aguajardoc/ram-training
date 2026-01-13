import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import { db } from "~/server/db";
import AdminDashboard from "../_components/admin-dashboard";

async function Admin() {
    const session = await auth();

    if (!session || session.user.role != "ADMIN") redirect("/")

    const [users, tracks, trackLevels, modules, problems] = await Promise.all([
        db.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                _count: { select: { solves: true }},
            },
        }),
        db.track.findMany({ include: { levels: true }}),
        db.trackLevel.findMany({ include: { levelModules: true }}),
        db.module.findMany({ include: { moduleProblems: true }}),
        db.problem.findMany(),
    ])
    
    return (
        <AdminDashboard
            users={users}
            tracks={tracks}
            trackLevels={trackLevels}
            modules={modules}
            problems={problems}
        />
    )
}

export default Admin;