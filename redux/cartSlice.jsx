import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      console.log(action)
      // state = state.products.filter(
      //   (product) => product._id != action.payload.product._id
      //   );
      //   state.quantity -= 1;
      // state.total -= action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, reset } = cartSlice.actions;
