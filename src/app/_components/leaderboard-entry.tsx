type Props = {
    name: String | null,
    place: number,
    solveCount: number,
    isUser: boolean,
};

function podiumClass(place: number) {
  if (place === 0) return "gold";
  if (place === 1) return "silver";
  if (place === 2) return "bronze";
  return "";
}

function LeaderboardEntry({ name, place, solveCount, isUser } : Props) {
    return (
        <div className={`leaderboard-entry ${isUser.toString()}`}>
            {/* Place */}
            <div className={`entry ${podiumClass(place)}`}>
                <span className="medal">{place}</span>
            </div>

            {/* Name */}
            <div className="leaderboard-name">
                {name ?? "anonymous"}
            </div>

            {/* Solve Count */}
            <div className="leaderboard-solve">
                {solveCount}
            </div>
        </div>
    );
}

export default LeaderboardEntry;