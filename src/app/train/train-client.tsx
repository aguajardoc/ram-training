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

type TrendResult = {
  direction: "up" | "down" | "neutral" | "none";
  colorClass: "positive" | "negative" | "neutral";
  formattedString: string;
};

type StatsGridProps = {
  currentPeriod: number;
  statsByPeriod: PeriodStats[];
  periodProblemCount: number[];
}

const defaultStats: PeriodStats = {
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

function calculateTrend(current: number, previous: number, isLowerBetter: boolean): TrendResult {
  // Edge cases
  if (current === 0 && previous === 0) return { direction: "none", colorClass: "neutral", formattedString: "" };

  // For all results, consider if down is better or not!
  if (previous === 0) return {
    direction: "up",
    colorClass: isLowerBetter ? "negative" : "positive",
    formattedString: "+100%"
  };

  if (current === 0) return {
    direction: "down",
    colorClass: isLowerBetter ? "positive" : "negative",
    formattedString: "-100%"
  };

  const difference = current - previous;
  const percentChange = (difference / previous) * 100;

  // No decimals looks cleaner
  const formattedValue = Math.abs(percentChange).toFixed(0) + "%";

  if (difference > 0) return {
    direction: "up",
    colorClass: isLowerBetter ? "negative" : "positive",
    formattedString: `+${formattedValue}`
  };

  if (difference < 0) return {
    direction: "down",
    colorClass: isLowerBetter ? "positive" : "negative",
    formattedString: `-${formattedValue}`
  };

  return { direction: "neutral", colorClass: "neutral", formattedString: "0%" };
}

function StatsGrid({ currentPeriod, statsByPeriod, periodProblemCount }: StatsGridProps) {
  // Safely grab both sets of data
  const currentStats = statsByPeriod[currentPeriod] ?? defaultStats;

  // If we are on Period 1, there is no Period 0, so fallback to defaultStats
  const prevStats = statsByPeriod[currentPeriod - 1] ?? defaultStats;

  // Calculate the trend for all stats
  // Use safe denominator
  const solvedDivisor = currentStats.solvedCount || 1;
  const prevSolvedDivisor = prevStats.solvedCount || 1;

  // Pre-calculate averages
  const avgSubmit = (currentStats.submitCount ?? 0) / solvedDivisor;
  const avgRead = (currentStats.readTime ?? 0) / solvedDivisor;
  const avgThink = (currentStats.thinkTime ?? 0) / solvedDivisor;
  const avgCode = (currentStats.codeTime ?? 0) / solvedDivisor;
  const avgDebug = (currentStats.debugTime ?? 0) / solvedDivisor;
  const avgTotal = (currentStats.totalTime ?? 0) / solvedDivisor;
  const avgDifficulty = (currentStats.perceivedDifficulty ?? 0) / solvedDivisor;

  const currentRatio = currentStats.codeTime ? currentStats.thinkTime / currentStats.codeTime : 0;

  // Calculate the previous averages
  const prevAvgSubmit = (prevStats.submitCount ?? 0) / prevSolvedDivisor;
  const prevAvgRead = (prevStats.readTime ?? 0) / prevSolvedDivisor;
  const prevAvgThink = (prevStats.thinkTime ?? 0) / prevSolvedDivisor;
  const prevAvgCode = (prevStats.codeTime ?? 0) / prevSolvedDivisor;
  const prevAvgDebug = (prevStats.debugTime ?? 0) / prevSolvedDivisor;
  const prevAvgTotal = (prevStats.totalTime ?? 0) / prevSolvedDivisor;
  const prevAvgDifficulty = (prevStats.perceivedDifficulty ?? 0) / prevSolvedDivisor;
  const prevRatio = prevStats.codeTime ? prevStats.thinkTime / prevStats.codeTime : 0;

  // UI config array
  const statCardsData = [
    {
      label: "Problems Solved",
      value: currentStats.solvedCount,
      subValue: `/ ${periodProblemCount[currentPeriod] || 0}`,
      highlight: true,
      trend: calculateTrend(currentStats.solvedCount, prevStats.solvedCount, false)
    },
    {
      label: "Avg Submit Count",
      value: avgSubmit.toFixed(1),
      trend: calculateTrend(avgSubmit, prevAvgSubmit, true)
    },
    {
      label: "Avg Read Time",
      value: avgRead.toFixed(1),
      suffix: " min.",
      trend: calculateTrend(avgRead, prevStats.readTime / prevSolvedDivisor, true)
    },
    {
      label: "Avg Think Time",
      value: avgThink.toFixed(1),
      suffix: " min.",
      trend: calculateTrend(avgThink, prevStats.thinkTime / prevSolvedDivisor, true)
    },
    {
      label: "Avg Code Time",
      value: avgCode.toFixed(1),
      suffix: " min.",
      trend: calculateTrend(avgCode, prevStats.codeTime / prevSolvedDivisor, true)
    },
    {
      label: "Avg Debug Time",
      value: avgDebug.toFixed(1),
      suffix: " min.",
      trend: calculateTrend(avgDebug, prevStats.debugTime / prevSolvedDivisor, true)
    },
    {
      label: "Avg Time/Problem",
      value: avgTotal.toFixed(1),
      suffix: " min.",
      trend: calculateTrend(avgTotal, prevStats.totalTime / prevSolvedDivisor, true)
    },
    {
      label: "Avg Difficulty",
      value: avgDifficulty.toFixed(1),
      trend: calculateTrend(avgDifficulty, prevStats.perceivedDifficulty / prevSolvedDivisor, false)
    },
    {
      label: "Solved Solo",
      value: currentStats.onYourOwnCount,
      subValue: `/ ${periodProblemCount[currentPeriod] || 0}`,
      trend: calculateTrend(currentStats.onYourOwnCount, prevStats.onYourOwnCount, false)
    },
    {
      label: "Think/Code Ratio",
      value: currentRatio.toFixed(1),
      trend: calculateTrend(currentRatio, prevStats.codeTime ? prevStats.thinkTime / prevStats.codeTime : 0, false)
    },
  ];

  return (
    <div className="stats-grid">
      {statCardsData.map((stat, index) => (
        // Apply the highlight class conditionally
        <div className={`stat-card ${stat.highlight ? 'highlight' : ''}`} key={index}>
          <span className="stat-label">{stat.label}</span>

          <span className="stat-value">
            {stat.value}
            {/* Render suffix (like " min.") if it exists */}
            {stat.suffix && stat.suffix}
            {/* Render subValue (like "/ 5") if it exists */}
            {stat.subValue && <span className="stat-sub"> {stat.subValue}</span>}
          </span>

          {/* Trend Indicator */}
          {stat.trend.direction !== "none" && currentPeriod > 1 && (
            <div className={`stat-trend ${stat.trend.colorClass}`}>
              {stat.trend.direction === "up" && "▲ "}
              {stat.trend.direction === "down" && "▼ "}
              {stat.trend.direction === "neutral" && "— "}
              {stat.trend.formattedString}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

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
    const getInitialStats = (): PeriodStats => ({ ...defaultStats});

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

  const { maxPeriod, periodProblemCount, moduleList } = useMemo(() => {
    let maxP = 1;
    const counts: number[] = [];
    const modMap = new Map<string, FullProblem[]>();

    problems?.forEach(p => {
      // Find Max Period
      maxP = Math.max(maxP, p.module.period);

      // Count problems      
      const period = p.module.period;
      counts[period] = (counts[period] || 0) + 1;

      // Group problems by module
      if (!modMap.has(p.moduleId)) {
        modMap.set(p.moduleId, []);
      }
      modMap.get(p.moduleId)?.push(p);
    });

    // Format module list
    const list = Array.from(modMap, ([moduleId, problems]) => ({
      moduleId,
      period: problems[0]?.module.period,
      moduleName: problems[0]?.module.name,
      problems: problems.sort((a, b) => a.order - b.order),
    }));

    return { maxPeriod: maxP, periodProblemCount: counts, moduleList: list };
  }, [problems]);

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
        <LevelPicker userId={userId} mappings={levelMappings} enrolledTrackIds={enrolledTrackIds} />

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

      {/* Render stats */}
      <StatsGrid
        currentPeriod={currentPeriod}
        statsByPeriod={stats}
        periodProblemCount={periodProblemCount}
      />

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
              {(resourceMap?.get(m.moduleId)?.length ?? 0) > 0 && (
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
          )
        })}

      {/* Change Level */}
      <button
        className="journey-btn"
        onClick={() => setEditingLevel(true)}>
        Change Level
      </button>
    </div>
  );
}