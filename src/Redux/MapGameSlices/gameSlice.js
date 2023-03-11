import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "gameLogic",
  initialState: {
    totalScore: 0,
    numOfRound: 0,
    countryName: "",
    gamestarttime:false,
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
    startthegametime:{
      reducer: (state, action) => { 
        state.gamestarttime= !state.gamestarttime;
      }
    }
  },
});

export const {
  calculateTotalScore,
  increaseNumberOfRounds,
  restartGame,
  StoreCountryName,
  startthegametime,
} = gameSlice.actions;
export default gameSlice.reducer;
