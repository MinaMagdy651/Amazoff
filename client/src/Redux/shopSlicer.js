import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obj: {
    // attrbitutes to be added later
    counter: 0,
    id: -1,
    name: "",
    email: "",
    dob: "",
    picture: "",
  },
};

const shopSlicer = createSlice({
  name: "obj",
  initialState,
  reducers: {
    setDataAction: (state, data) => {
      state.obj.id = data.payload.customer.id;
      state.obj.name = data.payload.customer.name;
      state.obj.email = data.payload.customer.email;
      state.obj.dob = data.payload.customer.dob;
      console.log(state.obj.name);
    },
    incrementAction: (state, data) => {
      state.obj.counter += data.payload;
    },
    decrementAction: (state) => {
      state.obj.counter--;
    },
  },
});
export const { incrementAction, decrementAction, setDataAction } =
  shopSlicer.actions;
export default shopSlicer.reducer;
