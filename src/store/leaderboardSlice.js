import { createSlice } from "@reduxjs/toolkit";

const loadLB = () => {
  try { return JSON.parse(localStorage.getItem("simon-leaderboard") || "[]"); }
  catch { return []; }
};

const leaderboardSlice = createSlice({
    name: "leaderboard",
    initialState: loadLB(),
    reducers: {
    addScore(state, action) {
        const record = action.payload;
        
        let updated = [...state];
        
        const existingIndex = updated.findIndex(r => r.id === record.id);
        
        if (existingIndex >= 0) {
            const existing = updated[existingIndex];
            if (record.level > existing.level) {
                updated[existingIndex] = {
                    ...existing,
                    level: record.level,
                    ts: record.ts,
                    nickname: record.nickname
                };
            } 
        } else {
            updated.push(record);
        }
        updated.sort((a, b) => b.level - a.level || b.ts - a.ts);
        
        const top100 = updated.slice(0, 100);
        localStorage.setItem("simon-leaderboard", JSON.stringify(top100));
        
        return top100;
    }}
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
