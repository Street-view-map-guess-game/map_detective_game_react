import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "coordinates",
  initialState: {
    coordinate: { lat: 0, lng: 0 },
    isRestarted: false,
    isGuessed: false,
    againsttimescore:0,
    guess:0,
  },
  reducers: {
    storeCoordinate: {
      reducer: (state, action) => {
        state.coordinate = action.payload;
      },
    },
    restartCoordinate: {
      reducer: (state, action) => {
        state.isRestarted = !state.isRestarted;
      },
    },
    openCloseResultPage: {
      reducer: (state, action) => {
        state.isGuessed = !state.isGuessed;
      },
    },
    setagaintimescore: {
      reducer: (state, action) => {
        state.againsttimescore = action.payload;
      },
    },
    againsttimeguess: {
      reducer: (state, action) => {
        state.guess = action.payload;
      },
    },

  },
});

export const { storeCoordinate, restartCoordinate, openCloseResultPage ,setagaintimescore,againsttimeguess } =
  mapSlice.actions;
export default mapSlice.reducer;
