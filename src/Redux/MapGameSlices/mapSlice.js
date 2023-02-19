import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const mapSlice = createSlice({
  name: "coordinates",
  initialState: {
    coordinate: { lat: 0, lng: 0 },
  },
  reducers: {
    storeCoordinate: {
      reducer: (state, action) => {
        state.coordinate = action.payload;
      },
    },
  },
});

export const { storeCoordinate } = mapSlice.actions;
export default mapSlice.reducer;
