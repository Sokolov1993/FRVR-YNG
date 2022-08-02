import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
