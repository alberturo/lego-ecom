import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth";
// import themeReducer from "../features/themeMode/themeMode";
import addToCartReducer from "../features/addToCart/addToCart";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    addToCart: addToCartReducer,
    // theme: themeReducer,
  },
});
