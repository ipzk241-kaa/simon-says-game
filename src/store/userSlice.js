import { createSlice } from "@reduxjs/toolkit";

const genId = () => "u_" + Math.random().toString(36).slice(2, 10);

const initialUserId = localStorage.getItem("simon-uid") || "";
const initialNickname = localStorage.getItem("simon-nick") || "";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: initialUserId,
    nickname: initialNickname,
  },
  reducers: {
    setNickname(state, action) {
      state.nickname = action.payload;
      localStorage.setItem("simon-nick", state.nickname);
    },
    ensureUserId(state) {
      if (!state.userId) {
        state.userId = genId();
        localStorage.setItem("simon-uid", state.userId);
      }
    }
  }
});

export const { setNickname, ensureUserId } = userSlice.actions;
export default userSlice.reducer;
