"use client";
import { useState } from "react";
import { useMemo } from "react";
import { api } from "~/trpc/react";
import LevelPicker from "../_components/level-picker";
import "../../styles/level-picker.css";
import "../../styles/globals.css";
import "../../styles/resource.css"
import type { ProblemDifficulty, ProblemType, Solve } from "generated/prisma";
import Problem from "../_components/problem";
import type { Resource } from "generated/prisma";

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
  module: { 
    name: string;
    period: number;
  };
  id: string;
  problemId: string;
  moduleId: string;
  order: number;
  problemType: ProblemType;
  difficulty: ProblemDifficulty;
};

type PeriodStats = {
  solvedCount: number;
  submitCount: number;
  readTime: number;
  thinkTime: number;
  codeTime: number;
  debugTime: number;
  totalTime: number;
  onYourOwnCount: number;
  perceivedDifficulty: number;
};

export default function TrainClient({ userId, levelMappings, enrolledTrackIds }: Props) {
  const trackId = enrolledTrackIds[0];
  const { data: problems, isLoading } = api.problem.getProblemsByTrack.useQuery(
    { trackId: trackId! },
    { enabled: !!trackId }
  );
  const { data: hasChosenLevel, isLoading: isCheckingLevel } = api.user.hasChosenLevel.useQuery();
  const [editingLevel, setEditingLevel] = useState(false);
  const { data: resources } = api.resource.getResourcesByTrack.useQuery(
    { trackId: trackId! },
    { enabled: !!trackId }
  );
  const [currentPeriod, setCurrentPeriod] = useState(1);

  // Get user stats
  const stats = useMemo(() => {
    const getInitialStats = (): PeriodStats => ({
      solvedCount: 0,
      submitCount: 0,
      readTime: 0,
      thinkTime: 0,
      codeTime: 0,
      debugTime: 0,
      totalTime: 0,
      onYourOwnCount: 0,
      perceivedDifficulty: 0,
    });

    if (!problems) return [];

    return problems.reduce<PeriodStats[]>((acc, p) => {
      // Find the specific solve for this user
      const userSolve = p.problem.solves.find((solve) => solve.userId === userId && solve.statusString !== "NO");
      const problemPeriod = p.module.period;

      if (!acc[problemPeriod]) {
        acc[problemPeriod] = getInitialStats();
      }

      if (userSolve) {
        const periodStats = acc[problemPeriod];

        periodStats.solvedCount++;
        periodStats.submitCount += userSolve.submitCount;
        periodStats.readTime += userSolve.readTimeMinutes;
        periodStats.thinkTime += userSolve.thinkTimeMinutes;
        periodStats.codeTime += userSolve.codeTimeMinutes;
        periodStats.debugTime += userSolve.debugTimeMinutes;
        
        // Calculate total time for this specific problem
        periodStats.totalTime += (userSolve.readTimeMinutes + userSolve.thinkTimeMinutes + userSolve.codeTimeMinutes + userSolve.debugTimeMinutes);
        
        if (userSolve.onYourOwn) {
          periodStats.onYourOwnCount++;
        }
        
        periodStats.perceivedDifficulty += userSolve.perceivedDifficulty;
      }

      return acc;
    }, []);
  }, [problems, userId]);

  // Period-related variables
  let maxPeriod = 1;
  let periodProblemCount = new Array();

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
    maxPeriod = Math.max(maxPeriod, p.module.period);

    if (!periodProblemCount[p.module.period]) {
      periodProblemCount[p.module.period] = 1;
    }
    else {
      periodProblemCount[p.module.period]++;
    }

    if (!moduleMap.has(p.moduleId)) {
      moduleMap.set(p.moduleId, []);
    }

    moduleMap.get(p.moduleId)?.push(p);
  });

  const moduleList = Array.from(moduleMap, ([moduleId, problems]) => {
    return ({
      moduleId,
      period: problems[0]?.module.period,
      moduleName: problems[0]?.module.name,
      problems: problems.sort((a, b) => a.order - b.order),
    });
  });

  // Filter resources by module
  const resourceMap = new Map<string, Resource[]>();

  resources?.forEach(r => {
    if (!resourceMap.has(r.moduleId)) {
      resourceMap.set(r.moduleId, []);
    }
    resourceMap.get(r.moduleId)?.push(r);
  });

  // Render problems available to user
  return (
    <div className="page">
      <h1 className="title">TRAINING</h1>

      {/* Period selector */}
      <div className="period-picker">
        {Array.from({ length: maxPeriod }, (_, index) => {
          const i = index + 1; // index starts at 0, so add 1
          const isActive = i === currentPeriod;

          return (
            <div 
              key={i} 
              className={`period-btn ${isActive ? 'active' : ''}`}
              onClick={() => setCurrentPeriod(i)}
            >
              Period {i}
            </div>
          );
        })}
      </div>

      {/* Average counts for items */}
      <div className="stats-grid">
        {/* Main Progress */}
        <div className="stat-card highlight">
          <span className="stat-label">Problems Solved</span>
          <span className="stat-value">{stats[currentPeriod]?.solvedCount} <span className="stat-sub">/ {periodProblemCount[currentPeriod] || 0}</span></span>
        </div>

        {/* The Averages */}
        <div className="stat-card">
          <span className="stat-label">Avg Submit Count</span>
          <span className="stat-value">{(stats[currentPeriod]?.submitCount ?? 0 / (stats[currentPeriod]?.solvedCount || 1)).toFixed(1)}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Read Time</span>
          <span className="stat-value">{(stats[currentPeriod]?.readTime ?? 0 / (stats[currentPeriod]?.solvedCount || 1)).toFixed(1)} min.</span>
        </div>
        
        <div className="stat-card">
          <span className="stat-label">Avg Think Time</span>
          <span className="stat-value">{(stats[currentPeriod]?.thinkTime ?? 0 / (stats[currentPeriod]?.solvedCount || 1)).toFixed(1)} min.</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Code Time</span>
          <span className="stat-value">{(stats[currentPeriod]?.codeTime ?? 0 / (stats[currentPeriod]?.solvedCount || 1)).toFixed(1)} min.</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Debug Time</span>
          <span className="stat-value">{(stats[currentPeriod]?.debugTime ?? 0 / (stats[currentPeriod]?.solvedCount || 1)).toFixed(1)} min.</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Time/Problem</span>
          <span className="stat-value">{(stats[currentPeriod]?.totalTime ?? 0 / (stats[currentPeriod]?.solvedCount || 1)).toFixed(1)} min.</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Avg Difficulty</span>
          <span className="stat-value">{(stats[currentPeriod]?.perceivedDifficulty ?? 0 / (stats[currentPeriod]?.solvedCount || 1)).toFixed(1)}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Solved Solo</span>
          <span className="stat-value">{stats[currentPeriod]?.onYourOwnCount} <span className="stat-sub">/ {periodProblemCount[currentPeriod] || 0}</span></span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Think/Code Ratio</span>
          <span className="stat-value">{(stats[currentPeriod]?.thinkTime ?? 0 / (stats[currentPeriod]?.codeTime || 1)).toFixed(1)}</span>
        </div>
      </div>

      {/* Module List */}
      {moduleList
        .filter(m => m.period === currentPeriod)
        .map(m => {
        if (m.period != currentPeriod) {
          return <div key={m.moduleId}></div>;
        }
        return (
        <div key={m.moduleId} className="module">
          {/* Module Name */}
          <h2 className="subtitle">
            {m.moduleName}
          </h2>

          {/* Module Resources */}
          {(resourceMap?.get(m.moduleId)?.length ?? 0)> 0 && (
            <div className="resource-card">
            {resourceMap?.get(m.moduleId)?.map((r) => (
              <div key={r.id} className="resource-item">
                <span className="resource-name">{r.name}</span>
                <span className={`resource-type ${(r.type).toLowerCase()}`}>{r.type}</span>
                <span className="resource-description">{r.description}</span>
                <a 
                  className="resource-link" 
                  href={r.link ?? "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  >{r.link}</a>
              </div>
            ))}
          </div>
          )}
          
          
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
      )})}

      {/* Change Level */}
      <button 
          className="journey-btn"
          onClick={() => setEditingLevel(true)}>
              Change Level
      </button>
    </div>
  );
}