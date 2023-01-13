import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
};

// const initialState = {
//   products: [
//     {
//       product: {
//         _id: "63c00792d856de780c27aeff",
//         title: "Pizza one",
//         desc: "A delicious pizza",
//         img: "pizza.png",
//         prices: [18, 22, 26],
//         extraOptions: [
//           {
//             text: "Spicy sauce",
//             price: 2,
//             _id: "63c00792d856de780c27af00",
//           },
//           {
//             text: "Spicy sauce",
//             price: 3,
//             _id: "63c00792d856de780c27af01",
//           },
//         ],
//         createdAt: "2023-01-12T13:13:54.398Z",
//         updatedAt: "2023-01-12T13:13:54.398Z",
//         __v: 0,
//       },
//       price: 21,
//       options: [
//         {
//           text: "Spicy sauce",
//           price: 3,
//           _id: "63c00792d856de780c27af01",
//         },
//       ],
//       quantity: 2,
//     },
//     {
//       product: {
//         _id: "63c00792d856de780c27aeff",
//         title: "Pizza one",
//         desc: "A delicious pizza",
//         img: "pizza.png",
//         prices: [18, 22, 26],
//         extraOptions: [
//           {
//             text: "Spicy sauce",
//             price: 2,
//             _id: "63c00792d856de780c27af00",
//           },
//           {
//             text: "Spicy sauce",
//             price: 3,
//             _id: "63c00792d856de780c27af01",
//           },
//         ],
//         createdAt: "2023-01-12T13:13:54.398Z",
//         updatedAt: "2023-01-12T13:13:54.398Z",
//         __v: 0,
//       },
//       price: 23,
//       options: [
//         {
//           text: "Spicy sauce",
//           price: 3,
//           _id: "63c00792d856de780c27af01",
//         },
//         {
//           text: "Spicy sauce",
//           price: 2,
//           _id: "63c00792d856de780c27af00",
//         },
//       ],
//       quantity: 4,
//     },
//   ],
//   quantity: 2,
//   total: 134,
// };

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
      state.products = [];
      state.quantity = 0;
      state.total = 0 ;
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, reset } = cartSlice.actions;
