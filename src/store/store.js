import { configureStore } from "@reduxjs/toolkit";
import gameSettingsReducer from "./gameSettingsSlice";
import userReducer from "./userSlice";
import leaderboardReducer from "./leaderboardSlice";

export const store = configureStore({
  reducer: {
    gameSettings: gameSettingsReducer,
    user: userReducer,
    leaderboard: leaderboardReducer
  },
});
