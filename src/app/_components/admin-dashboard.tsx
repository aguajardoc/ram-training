"use client"
import type { Track, TrackLevel, Module, Problem } from "generated/prisma";

import UserPanel from "./user-panel";
import TrackPanel from "./track-panel";
import LevelPanel from "./level-panel";
import ModulePanel from "./module-panel";
import ProblemPanel from "./problem-panel";

import type { ModuleRow, ProblemRow, UserRow } from "../admin/types";

type Props = {
    users: UserRow[],
    tracks: Track[],
    trackLevels: TrackLevel[],
    modules: ModuleRow[],
    problems: ProblemRow[],
};

function AdminDashboard({ users, tracks, trackLevels, modules, problems } : Props) {
    return (
        <div className="page">
            <UserPanel users={users}/>
            <TrackPanel tracks={tracks}/>
            <LevelPanel levels={trackLevels}/>
            <ModulePanel modules={modules} problems={problems}/>
            <ProblemPanel problems={problems}/>
        </div>
    )
}

export default AdminDashboard;