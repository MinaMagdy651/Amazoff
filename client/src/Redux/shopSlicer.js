import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obj: {
    // attrbitutes to be added later
    counter: 0,
    id: -1,
    type: "",
    name: "",
    email: "",
    dob: "",
    picture: "",
    address: "",
    status: false,
  },
};

const shopSlicer = createSlice({
  name: "obj",
  initialState,
  reducers: {
    setDataAction: (state, data) => {
      state.obj.id = data.payload.id;
      state.obj.name = data.payload.name;
      state.obj.email = data.payload.email;
      state.obj.dob = data.payload.dob;
      state.obj.address = data.payload.address;
      state.obj.status = true;
    },
    clearDataAction: (state) => {
      state.obj.id = -1;
      state.obj.name = "";
      state.obj.email = "";
      state.obj.dob = "";
      state.obj.address = "";
      state.obj.status = false;
    },
    incrementAction: (state, data) => {
      state.obj.counter += data.payload;
    },
    decrementAction: (state) => {
      state.obj.counter--;
    },
  },
});
export const {
  incrementAction,
  decrementAction,
  setDataAction,
  clearDataAction,
} = shopSlicer.actions;
export default shopSlicer.reducer;
