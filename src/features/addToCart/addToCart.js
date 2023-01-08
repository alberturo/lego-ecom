import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.payload.id}) as its not in the cart`
        );
      }
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = addToCartSlice.actions;

export const selectCartItems = (state) => state.addToCart.items;

export const selectCartItemsWithId = (state, id) =>
  state.addToCart.items.filter((item) => item.id === id);

export const selectCartTotal = (state) =>
  state.addToCart.items.reduce((total, item) => (total += item.unit_price), 0);

export default addToCartSlice.reducer;
