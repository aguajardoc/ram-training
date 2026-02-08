import { useState } from "react";
import { enrollUserInTrack } from "../train/actions";

type Props = {
    userId: string
}

const levels = [
  {
    id: "Level A",
    title: "Beginner",
    icon: "🟢",
    description: "For people just starting out.",
    aim: "Get comfortable with implementing ideas in code.",
    requirements: "None! No prior experience required :)",
  },
  {
    id: "Level B",
    title: "Intermediate",
    icon: "🟡",
    description: "For users with some experience.",
    aim: "Understand basic algorithms, inside and out.",
    requirements: "Modular arithmetic, Basic combinatorics, DFS, Trigonometric functions, Binary Search.",
  },
  {
    id: "Level C1",
    title: "Advanced",
    icon: "🔴",
    description: "For those who know their way around.",
    aim: "Broaden your knowledge and get exposed to increasingly more interesting ideas.",
    requirements: "Everything required for Level B plus combinations and permutations, stacks, queues, GCD, LCM, Modular Exponentiation, Prefix Sum, BFS, Basic DP, geometry (lines and distances), MST, Greedy.",
  },
];

function LevelPicker({ userId } : Props) {
  const [idx, setIdx] = useState(1);

  const prev = () => setIdx((i) => (i - 1 + levels.length) % levels.length);
  const next = () => setIdx((i) => (i + 1) % levels.length);

  return (
    <div className="empty-page">
        <div className="level-picker-wrapper">
            <button className="nav-btn" onClick={prev}>⬅️</button>
            <div className="level-picker">
                

                <div className="carousel-window">
                    <div
                        className="carousel-track"
                        style={{
                            width: `${levels.length * 100}%`,
                            transform: `translateX(-${idx * (100)}%)`,
                        }}
                    >
                        {levels.map((level, i) => (
                            <div
                            key={level.id}
                            className={`carousel-item ${i === idx ? "active" : ""}`}
                            >
                                <div className="level-card">
                                <div className="level-header">
                                    <span className="level-icon">{level.icon}</span>
                                    <span className="level-code">{level.id}</span>
                                </div>

                                <div className="level-title">{level.title}</div>
                                <p className="level-desc">{level.description}</p>

                                <div className="level-section">
                                    <span className="level-label">🎯 Aim</span>
                                    <p className="level-desc">{level.aim}</p>
                                </div>

                                <div className="level-section">
                                    <span className="level-label">📌 Requirements</span>
                                    <p className="level-desc">{level.requirements}</p>
                                </div>
                                </div>

                                <form action={enrollUserInTrack} className="enroll-form">
                                    <input 
                                        type="hidden"
                                        name="userId"
                                        value={userId}
                                    />
                                    <input
                                        type="hidden"
                                        name="trackId"
                                        // value={trackId}
                                    />

                                    <button type="submit" className="journey-btn">
                                        <span className="btn-glow" />
                                        <span className="btn-text">Are you ready for it?</span>
                                    </button>
                                </form>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
            <button className="nav-btn" onClick={next}>➡️</button>
        </div>
    </div>
  );
}


export default LevelPicker;