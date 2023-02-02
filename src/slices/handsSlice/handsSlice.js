import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerHand: "idle",
  computerHand: "idle",
  playerHealth: 100,
  computerHealth: 100,
  status: "game",
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
    changeHealth: (state) => {
      if (state.playerHand === "scissors") {
        if (state.computerHand === "rock") {
          state.playerHealth = state.playerHealth - 10;
        } else if (state.computerHand === "paper") {
          state.computerHealth = state.computerHealth - 10;
        }
      } else if (state.playerHand === "rock") {
        if (state.computerHand === "paper") {
          state.playerHealth = state.playerHealth - 10;
        } else if (state.computerHand === "scissors") {
          state.computerHealth = state.computerHealth - 10;
        }
      } else {
        if (state.computerHand === "scissors") {
          state.playerHealth = state.playerHealth - 10;
        } else if (state.computerHand === "rock") {
          state.computerHealth = state.computerHealth - 10;
        }
      }

      if (state.computerHealth <= 0) {
        state.status = "win";
      } else if (state.playerHealth <= 0) {
        state.status = "lose";
      }
    },
  },
});

const { actions, reducer } = timerSlice;
export const { changePlayerHand, changeComputerHand, changeHealth } = actions;
export default reducer;
