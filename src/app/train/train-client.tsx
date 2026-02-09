"use client";
import { api } from "~/trpc/react";
import Problem from "../_components/problem";
import LevelPicker from "../_components/level-picker";
import "../../styles/level-picker.css";
import "../../styles/globals.css";

type Props = {
  userId: string,
  levelMappings: any[],
  enrolledTrackIds: string[],
};

export default function TrainClient({ userId, levelMappings, enrolledTrackIds }: Props) {
  const { data: problems, isLoading } = api.problem.all.useQuery();
  const { data: hasChosenLevel, isLoading: isCheckingLevel } = api.user.hasChosenLevel.useQuery();

  if (isLoading || isCheckingLevel) {
    return (
      <div className="loading">
        Fetching cool problems, please wait!
      </div>
    );
  }

  if (!hasChosenLevel) {
    return (
      <div>
        <LevelPicker userId={userId} mappings={levelMappings} enrolledTrackIds={enrolledTrackIds}/>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="title">TRAINING</h1>
      
      {/* Problem List */}
      {problems?.map((p) => (
        <Problem
          key={p.id}
          problemType={p.type}
          problemName={p.name}
          problemURL={p.url}
        />
      ))}

      {/* Change Level */}
      <LevelPicker userId={userId} mappings={levelMappings} enrolledTrackIds={enrolledTrackIds}/>
    </div>
  );
}