import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerHand: "idle",
  computerHand: "idle",
};

const timerSlice = createSlice({
  name: "hands",
  initialState,
  reducers: {
    changePlayerHand: (state, action) => {
      state.playerHand = action.payload;
    },
    changeComputerHand: (state, action) => {
      state.computerHand = action.payload;
    },
  },
});

const { actions, reducer } = timerSlice;
export const { changePlayerHand, changeComputerHand } = actions;
export default reducer;
