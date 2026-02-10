"use client";
import { useState } from "react";
import { api } from "~/trpc/react";
import LevelPicker from "../_components/level-picker";
import "../../styles/level-picker.css";
import "../../styles/globals.css";
import type { ProblemDifficulty, ProblemType } from "generated/prisma";
import { Fragment } from "react";
import Problem from "../_components/problem";

type Props = {
  userId: string,
  levelMappings: any[],
  enrolledTrackIds: string[],
};

type FullProblem = {
  problem: { name: string; id: string; url: string; };
  module: { name: string; };
  id: string;
  problemId: string;
  moduleId: string;
  order: number;
  problemType: ProblemType;
  difficulty: ProblemDifficulty;
};

export default function TrainClient({ userId, levelMappings, enrolledTrackIds }: Props) {
  const { data: problems, isLoading } = api.problem.getProblemsByTrack.useQuery(
    { trackId: enrolledTrackIds[0] ?? ""},
    { enabled: !!enrolledTrackIds[0] }
  );
  const { data: hasChosenLevel, isLoading: isCheckingLevel } = api.user.hasChosenLevel.useQuery();
  const [editingLevel, setEditingLevel] = useState(false);

  if (isLoading || isCheckingLevel) {
    return (
      <div className="loading">
        Fetching cool problems, please wait!
      </div>
    );
  }

  // Force user to pick a track first
  if (!hasChosenLevel || editingLevel) {
    return (
      <div>
        <LevelPicker userId={userId} mappings={levelMappings} enrolledTrackIds={enrolledTrackIds}/>

        {editingLevel && (
          <div className="page">
          <button 
              className="journey-btn"
              onClick={() => setEditingLevel(false)}>
                Back
          </button>
          </div>
        )}
      </div>
    );
  }

  // List of modules
  // I care about modules and the problems they contain
  const moduleMap = new Map<string, FullProblem[]>();

  problems?.forEach(p => {
    if (!moduleMap.has(p.moduleId)) {
      moduleMap.set(p.moduleId, []);
    }

    moduleMap.get(p.moduleId)?.push(p);
  });

  const moduleList = Array.from(moduleMap, ([moduleId, problems]) => (
    {
      moduleId,
      moduleName: problems[0]?.module.name,
      problems: problems.sort((a, b) => a.order - b.order),
    }
  ));

  // Render problems available to user
  return (
    <div className="page">
      <h1 className="title">TRAINING</h1>

      {/* Module List */}
      
      {moduleList.map(m => (
        <div key={m.moduleId} className="module">
          {/* Module Name */}
          <h2 className="subtitle">
            {m.moduleName}
          </h2>
          
            {/* Problem List */}
            {m.problems?.map((p) => (
              <Problem
                key={p.id}
                problemType={p.problemType}
                problemName={p.problem.name}
                problemURL={p.problem.url}
                problemDifficulty={p.difficulty}
              />
            ))}
        </div>
      ))}

      {/* Change Level */}
      <button 
          className="journey-btn"
          onClick={() => setEditingLevel(true)}>
              Change Level
      </button>
    </div>
  );
}