import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../pages/slice/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export { store };