import { createSlice } from "@reduxjs/toolkit";

const initialDifficulty = localStorage.getItem("simon-difficulty") || "medium";

const gameSettingsSlice = createSlice({
  name: "gameSettings",
  initialState: {
    difficulty: initialDifficulty,
    settingsByDifficulty: {
      easy: { speed: 1000, colorsCount: 4 },
      medium: { speed: 700, colorsCount: 6 },
      hard: { speed: 450, colorsCount: 9 },
    }
  },
  reducers: {
    setDifficulty(state, action) {
      state.difficulty = action.payload;
      localStorage.setItem("simon-difficulty", state.difficulty);
    }
  }
});

export const { setDifficulty } = gameSettingsSlice.actions;
export default gameSettingsSlice.reducer;
