import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlicer";

export const store = configureStore({
  reducer: {
    obj: shopReducer,
  },
});
