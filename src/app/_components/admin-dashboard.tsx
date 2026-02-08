"use client"
import type { Track, TrackLevel, Module, Problem } from "generated/prisma";

import UserPanel from "./user-panel";
import TrackPanel from "./track-panel";
import LevelPanel from "./level-panel";
import ModulePanel from "./module-panel";
import ProblemPanel from "./problem-panel";
import GreetingPanel from "./greeting-panel";

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
            <ProblemPanel problems={problems}/>
            <ModulePanel modules={modules} problems={problems}/>
            <LevelPanel levels={trackLevels} tracks={tracks} modules={modules}/>
            <TrackPanel tracks={tracks} users={users}/>
            <UserPanel users={users}/>
            {/* <GreetingPanel/> WIP */}
        </div>
    )
}

export default AdminDashboard;