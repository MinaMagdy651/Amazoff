import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obj: {
    id: -1,
    type: "",
    name: "",
    email: "",
    dob: "",
    picture: "",
    address: "",
    counter: 0,
    status: false,
    purchase_list: [],
    reviews_list: [],
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
      state.obj.counter = data.payload.counter;
      state.obj.status = true;
    },
    clearDataAction: (state) => {
      state.obj.id = -1;
      state.obj.name = "";
      state.obj.email = "";
      state.obj.dob = "";
      state.obj.address = "";
      state.obj.status = false;
      state.obj.counter = 0;
      state.obj.purchase_list = [];
      state.obj.reviews_list = [];
    },
    setPurchaseAction: (state, data) => {
      state.obj.purchase_list = data.payload;
    },
    setReviewsAction: (state, data) => {
      state.obj.reviews_list = data.payload;
    },
    updateCounter: (state, data) => {
      state.obj.counter = data.payload;
    },
    updatePurchaseAction: (state, data) => {
      state.obj.purchase_list.push(data);
    },
    updateReviewsAction: (state, data) => {
      state.obj.reviews_list.push(data.payload);
    },
  },
});
export const {
  setDataAction,
  clearDataAction,
  setPurchaseAction,
  setReviewsAction,
  updateCounter,
  updatePurchaseAction,
  updateReviewsAction,
} = shopSlicer.actions;
export default shopSlicer.reducer;
