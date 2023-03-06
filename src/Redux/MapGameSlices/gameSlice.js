import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "gameLogic",
  initialState: {
    totalScore: 0,
    numOfRound: 0,
    countryName: "",
  },
  reducers: {
    calculateTotalScore: {
      reducer: (state, action) => {
        state.totalScore += action.payload;
      },
    },
    increaseNumberOfRounds: {
      reducer: (state, action) => {
        state.numOfRound += 1;
      },
    },
    restartGame: {
      reducer: (state, action) => {
        state.numOfRound = 0;
        state.totalScore = 0;
      },
    },
    StoreCountryName: {
      reducer: (state, action) => {
        state.countryName = action.payload;
      },
    },
  },
});

export const {
  calculateTotalScore,
  increaseNumberOfRounds,
  restartGame,
  StoreCountryName,
} = gameSlice.actions;
export default gameSlice.reducer;
