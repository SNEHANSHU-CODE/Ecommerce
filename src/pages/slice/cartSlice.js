import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const calculateTotal = (items) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalAmount = calculateTotal(state.cartItems);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      state.totalAmount = calculateTotal(state.cartItems);
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalAmount = calculateTotal(state.cartItems);
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalAmount = calculateTotal(state.cartItems);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const totalProduct = (state) => state.cart.cartItems.length;

export default cartSlice.reducer;

