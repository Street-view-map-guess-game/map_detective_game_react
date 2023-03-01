import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "./MapGameSlices/mapSlice";
import gameSlice from "./MapGameSlices/gameSlice";

export const store = configureStore({
  reducer: {
    mapSlc: mapSlice,
    gmSlc: gameSlice,
  },
});
