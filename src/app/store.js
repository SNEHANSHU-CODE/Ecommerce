import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../pages/slice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
