import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "./MapGameSlices/mapSlice";

export const store = configureStore({
  reducer: {
    mapSlc: mapSlice,
  },
});
