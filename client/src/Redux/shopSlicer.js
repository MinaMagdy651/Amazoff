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
    cart: 0,
    status: false,
    purchase_list: [],
    reviews_list: [],
    cart_list: [],
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
      // console.log(data.payload);
      state.obj.cart = data.payload.cart;
      state.obj.status = true;
    },
    clearDataAction: (state) => {
      state.obj.id = -1;
      state.obj.name = "";
      state.obj.email = "";
      state.obj.dob = "";
      state.obj.address = "";
      state.obj.status = false;
      state.obj.cart = 0;
      state.obj.purchase_list = [];
      state.obj.reviews_list = [];
    },
    setPurchaseAction: (state, data) => {
      state.obj.purchase_list = data.payload;
    },
    setReviewsAction: (state, data) => {
      state.obj.reviews_list = data.payload;
    },
    updateCartAction: (state, data) => {
      state.obj.cart = data.payload;
    },
    updatePurchaseAction: (state, data) => {
      state.obj.purchase_list.push(data);
    },
    updateReviewsAction: (state, data) => {
      state.obj.reviews_list.push(data.payload);
    },
    setCartAction: (state, data) => {
      state.obj.cart_list.push(data);
    },
  },
});
export const {
  setDataAction,
  clearDataAction,
  setPurchaseAction,
  setReviewsAction,
  updateCartAction,
  updatePurchaseAction,
  updateReviewsAction,
} = shopSlicer.actions;
export default shopSlicer.reducer;
