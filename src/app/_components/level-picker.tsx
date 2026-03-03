"use client"
import { useState } from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

type Props = {
    userId: string,
    mappings: { levelId: string; trackId: string }[],
    enrolledTrackIds: string[],
};

const levels = [
  {
    id: "Level A",
    title: "Beginner",
    difficulty: 0,
    description: "For people just starting out.",
    aim: "Get comfortable with implementing ideas in code.",
    requirements: "None! No prior experience required :)",
  },
  {
    id: "Level B",
    title: "Intermediate",
    difficulty: 1,
    description: "For users with some experience.",
    aim: "Understand basic algorithms, inside and out.",
    requirements: "Modular Arithmetic, Basic Combinatorics, DFS, Trigonometric Functions, and Binary Search.",
  },
  {
    id: "Level C1",
    title: "Advanced",
    difficulty: 2,
    description: "For those who know their way around.",
    aim: "Broaden your knowledge and get exposed to increasingly more interesting ideas.",
    requirements: "Everything required for Level B plus: Combinations and Permutations, Stacks, Queues, GCD, LCM, Modular Exponentiation, Prefix Sum, BFS, Basic DP, Geometry (lines and distances), MST, and Greedy.",
  },
];

const DifficultyIcon = ({ difficulty }: { difficulty: number }) => {
    const difficultyColor = ["#4ade80", "#facc15", "#f87171"];

    const getFill = ( barIndex : number ) => {
        if (difficulty < barIndex) {
            return "rgba(255,255,255,0.2)";
        }
        return difficultyColor[Math.min(Math.max(difficulty, 0), difficultyColor.length)];
    };

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            strokeWidth={0}
            stroke="currentColor" 
            width="48" height="48" // Adjust size here
            >
            {/* Bar 1 (Shortest) */}
            <path 
                fill={getFill(0)}
                strokeLinecap="round" strokeLinejoin="round" 
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75Z" 
            />
            {/* Bar 2 (Medium) */}
            <path 
                fill={getFill(1)}
                strokeLinecap="round" strokeLinejoin="round" 
                d="M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625Z" 
            />
            {/* Bar 3 (Tallest) */}
            <path 
                fill={getFill(2)}
                strokeLinecap="round" strokeLinejoin="round" 
                d="M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" 
            />
            </svg>
    );
};

const TargetIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24"
        width="24"            // Sized to match your text
        height="24" 
        fill="none" 
        strokeWidth={2}       // Matches the visual weight of your text
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{ display: 'inline-block', verticalAlign: 'middle' }} // Aligns nicely with text
    >
        {/* The Arrow (Teal Accent) */}
        <path 
        d="M12 12l4-4m2-5L16 5V8h3l2-2L19 5Z" 
        stroke="rgb(44, 169, 188)" // Keep the teal, or change to hex #2ca9bc
        />
        
        {/* Outer Circle (Uses text color) */}
        <path 
        d="M21 12a9 9 0 1 1-9-9" 
        stroke="currentColor" 
        />
        
        {/* Inner Circle (Uses text color) */}
        <path 
        d="M16 12a4 4 0 1 1-4-4" 
        stroke="currentColor" 
        />
    </svg>
);

const RequirementsIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        fill="none"
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
        <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM10.5431 7.51724C10.8288 7.2173 10.8172 6.74256 10.5172 6.4569C10.2173 6.17123 9.74256 6.18281 9.4569 6.48276L7.14286 8.9125L6.5431 8.28276C6.25744 7.98281 5.78271 7.97123 5.48276 8.2569C5.18281 8.54256 5.17123 9.01729 5.4569 9.31724L6.59976 10.5172C6.74131 10.6659 6.9376 10.75 7.14286 10.75C7.34812 10.75 7.5444 10.6659 7.68596 10.5172L10.5431 7.51724ZM13 8.25C12.5858 8.25 12.25 8.58579 12.25 9C12.25 9.41422 12.5858 9.75 13 9.75H18C18.4142 9.75 18.75 9.41422 18.75 9C18.75 8.58579 18.4142 8.25 18 8.25H13ZM10.5431 14.5172C10.8288 14.2173 10.8172 13.7426 10.5172 13.4569C10.2173 13.1712 9.74256 13.1828 9.4569 13.4828L7.14286 15.9125L6.5431 15.2828C6.25744 14.9828 5.78271 14.9712 5.48276 15.2569C5.18281 15.5426 5.17123 16.0173 5.4569 16.3172L6.59976 17.5172C6.74131 17.6659 6.9376 17.75 7.14286 17.75C7.34812 17.75 7.5444 17.6659 7.68596 17.5172L10.5431 14.5172ZM13 15.25C12.5858 15.25 12.25 15.5858 12.25 16C12.25 16.4142 12.5858 16.75 13 16.75H18C18.4142 16.75 18.75 16.4142 18.75 16C18.75 15.5858 18.4142 15.25 18 15.25H13Z" 
        fill="currentColor"
        />
    </svg>
);

function LevelPicker({ userId, mappings, enrolledTrackIds } : Props) {
    const router = useRouter();
    const utils = api.useUtils();
    const [idx, setIdx] = useState(0);

    const [optimisticIds, setOptimisticIds] = useState<String[]>([]);

    const prev = () => setIdx((i) => (i - 1 + levels.length) % levels.length);
    const next = () => setIdx((i) => (i + 1) % levels.length);

    const userTrackMutation = api.user.addToTrack.useMutation({
        onSuccess: async (data, variables) => {
            setOptimisticIds((prev) => [...prev, variables.trackId]);
            router.refresh();
        },
        onError: (error) => {
            alert(`Failed to save: ${error.message}`);
        }
    })

    const handleEnroll = (trackId: string) => {
        if (!trackId) return;
        userTrackMutation.mutate({ trackId });
    };

    return (
        <div className="empty-page">
            <div className="level-picker-wrapper">
                <button className="nav-btn" onClick={prev}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2}
                        stroke="currentColor" 
                        width="32"
                        height="32"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <div className="level-picker">
                    

                    <div className="carousel-window">
                        <div
                            className="carousel-track"
                            style={{
                                width: `${levels.length * 100}%`,
                                transform: `translateX(-${idx * (100)}%)`,
                            }}
                        >
                            {levels.map((level, i) => {
                                const activeTrack = mappings.find((m) => m.levelId === level.id);
                                const trackId = activeTrack?.trackId || "";
                                const isEnrolled = enrolledTrackIds.includes(trackId) || optimisticIds.includes(trackId);
                                
                                return (
                                    <div
                                    key={level.id}
                                    className={`carousel-item ${i === idx ? "active" : ""}`}
                                    >
                                        <div className="level-card">
                                        <div className="level-header">
                                            <DifficultyIcon difficulty={level.difficulty}/>
                                            <span className="level-code">{level.id}</span>
                                        </div>

                                        <div className="level-title">{level.title}</div>
                                        <p className="level-desc">{level.description}</p>

                                        <div className="level-section">
                                            
                                            <span className="level-label">
                                                <TargetIcon/> Objective
                                            </span>
                                            <p className="level-desc">{level.aim}</p>
                                        </div>

                                        <div className="level-section">
                                            <span className="level-label">
                                                <RequirementsIcon/> Requirements
                                            </span>
                                            <p className="level-desc">{level.requirements}</p>
                                        </div>
                                        </div>

                                        <div className="enroll-action"> 
                                            <button 
                                                onClick={() => handleEnroll(trackId)}
                                                className="journey-btn"
                                                disabled={!trackId || isEnrolled || userTrackMutation.isPending}
                                                style={{ 
                                                    opacity: (!trackId || isEnrolled) ? 0.5 : 1, 
                                                    cursor: (!trackId || isEnrolled) ? 'not-allowed' : 'pointer' 
                                                }}
                                            >
                                                <span className="btn-glow" />
                                                <span className="btn-text">
                                                    {userTrackMutation.isPending && i === idx ? "Loading..." : 
                                                     isEnrolled ? "Already in it!" : "Are you ready for it?"}
                                                </span>
                                            </button>
                                        </div>
                                        
                                    </div>
                                )})
                            }
                        </div>
                    </div>

                    
                </div>
                <button className="nav-btn" onClick={next}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2}
                        stroke="currentColor" 
                        width="32"
                        height="32"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}


export default LevelPicker;