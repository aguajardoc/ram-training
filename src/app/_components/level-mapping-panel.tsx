import "../../styles/globals.css"
import { db } from "~/server/db";
import { updateLevelMapping } from "../admin/actions";

const LEVELS = [
  { id: "Level A", label: "Beginner" },
  { id: "Level B", label: "Intermediate" },
  { id: "Level C1", label: "Advanced" },
];

async function LevelMappingPanel() {
  const allTracks = await db.track.findMany();
  const currentMappings = await db.levelToTrack.findMany();

  return (
    <div>
      <h1>Level Mapping</h1>
      
      {LEVELS.map((level) => {
        // Find if we've already linked this level
        const activeMapping = currentMappings.find((m) => m.levelId === level.id);

        return (
          <div key={level.id} style={{ marginBottom: "20px", border: "1px solid #333", padding: "10px" }}>
            
            <h3>{level.label}</h3>
            <p>ID Key: {level.id}</p>

            <form action={updateLevelMapping}>
              {/* Hidden: Sends "Level A" to the server */}
              <input type="hidden" name="levelId" value={level.id} />
              
              <div style={{ display: "flex", gap: "10px" }}>
                <select 
                  name="trackId" 
                  defaultValue={activeMapping?.trackId || ""}
                >
                  <option value="" disabled>-- Select a Track --</option>
                  
                  {/* Populate dropdown with real DB tracks */}
                  {allTracks.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>

                <button type="submit">Save</button>
              </div>
            </form>

          </div>
        );
      })}
    </div>
  );
}

export default LevelMappingPanel;