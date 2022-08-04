import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartReducer';
import fetchProductsSlice from '../api/requests/fetchProducts/fetchProductsSlice';
import fetchProductSlice from '../api/requests/fetchProduct/fetchProductSlice';
import searchDataSlice from './searchData/searchDataSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fetchProducts: fetchProductsSlice,
    fetchProduct: fetchProductSlice,
    searchData: searchDataSlice,
  },
});
