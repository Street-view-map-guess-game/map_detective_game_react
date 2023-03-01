import { createSlice } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "coordinates",
  initialState: {
    coordinate: { lat: 0, lng: 0 },
    isRestarted: false,
    isGuessed: false,
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
  },
});

export const { storeCoordinate, restartCoordinate, openCloseResultPage } =
  mapSlice.actions;
export default mapSlice.reducer;
