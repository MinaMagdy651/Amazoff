import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obj: {
    // attrbitutes to be added later
    counter: 0,
  },
};

const shopSlicer = createSlice({
  name: "obj",
  initialState,
  reducers: {
    incrementAction: (state) => {
      state.obj.counter++;
    },
    decrementAction: (state) => {
      state.obj.counter--;
    },
  },
});
export const { incrementAction, decrementAction } = shopSlicer.actions;
export default shopSlicer.reducer;
