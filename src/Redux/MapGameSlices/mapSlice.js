import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

export const mapSlice = createSlice({
  name: "coordinates",
  initialState: {
    coordinate: { lat: 0, lng: 0 },
    isRestarted: false,
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
  },
});

export const { storeCoordinate, restartCoordinate } = mapSlice.actions;
export default mapSlice.reducer;
