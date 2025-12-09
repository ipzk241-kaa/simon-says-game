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

      const existing = state.find(r => r.id === record.id);

      if (existing) {
        if (record.level > existing.level) {
          existing.level = record.level;
          existing.ts = record.ts;
          existing.nickname = record.nickname;
        }
      } else {
        state.push(record);
      }

      state.sort((a, b) => b.level - a.level || b.ts - a.ts);

      const top100 = state.slice(0, 100);
      localStorage.setItem("simon-leaderboard", JSON.stringify(top100));

      return top100;
    }
  }
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
