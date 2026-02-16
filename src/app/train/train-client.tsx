"use client";
import { useState } from "react";
import { useMemo } from "react";
import { api } from "~/trpc/react";
import LevelPicker from "../_components/level-picker";
import "../../styles/level-picker.css";
import "../../styles/globals.css";
import type { ProblemDifficulty, ProblemType, Solve } from "generated/prisma";
import Problem from "../_components/problem";

type Props = {
  userId: string,
  levelMappings: any[],
  enrolledTrackIds: string[],
};

type FullProblem = {
  problem: { 
    name: string; 
    id: string; 
    url: string; 
    solves: Solve[];
  };
  module: { name: string; };
  id: string;
  problemId: string;
  moduleId: string;
  order: number;
  problemType: ProblemType;
  difficulty: ProblemDifficulty;
};

export default function TrainClient({ userId, levelMappings, enrolledTrackIds }: Props) {
  const trackId = enrolledTrackIds[0];
  const { data: problems, isLoading } = api.problem.getProblemsByTrack.useQuery(
    { trackId: trackId! },
    { enabled: !!trackId }
  );
  const { data: hasChosenLevel, isLoading: isCheckingLevel } = api.user.hasChosenLevel.useQuery();
  const [editingLevel, setEditingLevel] = useState(false);

  // Get user stats
  const stats = useMemo(() => {
    const initialStats = {
      solvedCount: 0,
      submitCount: 0,
      readTime: 0,
      thinkTime: 0,
      codeTime: 0,
      debugTime: 0,
      totalTime: 0,
      onYourOwnCount: 0,
      perceivedDifficulty: 0,
    };

    if (!problems) return initialStats;

    return problems.reduce((acc, p) => {
      // Find the specific solve for this user
      const userSolve = p.problem.solves.find((solve) => solve.userId === userId && solve.statusString !== "NO");

      if (userSolve) {
        acc.solvedCount++;
        acc.submitCount += userSolve.submitCount;
        acc.readTime += userSolve.readTimeMinutes;
        acc.thinkTime += userSolve.thinkTimeMinutes;
        acc.codeTime += userSolve.codeTimeMinutes;
        acc.debugTime += userSolve.debugTimeMinutes;
        
        // Calculate total time for this specific problem
        acc.totalTime += (userSolve.readTimeMinutes + userSolve.thinkTimeMinutes + userSolve.codeTimeMinutes + userSolve.debugTimeMinutes);
        
        if (userSolve.onYourOwn) {
          acc.onYourOwnCount++;
        }
        
        acc.perceivedDifficulty += userSolve.perceivedDifficulty;
      }

      return acc;
    }, initialStats);
  }, [problems, userId]);

  if (isLoading && (isCheckingLevel || !hasChosenLevel || !trackId)) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  if (isLoading && trackId) {
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
          <div className="floating-back-button">
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

  // List of modules.
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

      {/* Average counts for items */}
      <div className="stats-grid">
        {/* Main Progress */}
        <div className="stat-card highlight">
          <span className="stat-label">Problems Solved</span>
          <span className="stat-value">{stats.solvedCount} <span className="stat-sub">/ {problems?.length || 0}</span></span>
        </div>

        {/* The Averages */}
        <div className="stat-card">
          <span className="stat-label">Avg Submit Count</span>
          <span className="stat-value">{(stats.submitCount / (stats.solvedCount || 1)).toFixed(1)}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Read Time</span>
          <span className="stat-value">{(stats.readTime / (stats.solvedCount || 1)).toFixed(1)} min.</span>
        </div>
        
        <div className="stat-card">
          <span className="stat-label">Avg Think Time</span>
          <span className="stat-value">{(stats.thinkTime / (stats.solvedCount || 1)).toFixed(1)} min.</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Code Time</span>
          <span className="stat-value">{(stats.codeTime / (stats.solvedCount || 1)).toFixed(1)} min.</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Debug Time</span>
          <span className="stat-value">{(stats.debugTime / (stats.solvedCount || 1)).toFixed(1)} min.</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Time/Problem</span>
          <span className="stat-value">{(stats.totalTime / (stats.solvedCount || 1)).toFixed(1)} min.</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Difficulty</span>
          <span className="stat-value">{(stats.perceivedDifficulty / (stats.solvedCount || 1)).toFixed(1)}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Solved Solo</span>
          <span className="stat-value">{stats.onYourOwnCount} <span className="stat-sub">/ {problems?.length || 0}</span></span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Think/Code Ratio</span>
          <span className="stat-value">{(stats.thinkTime / stats.codeTime).toFixed(1)}</span>
        </div>
      </div>

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
                problemId={p.problemId}
                problemType={p.problemType}
                problemName={p.problem.name}
                problemURL={p.problem.url}
                problemDifficulty={p.difficulty}
                solveData={p.problem.solves}
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