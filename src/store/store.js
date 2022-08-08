import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartReducer';
import fetchProductsSlice from '../api/requests/fetchProducts/fetchProductsSlice';
import fetchProductSlice from '../api/requests/fetchProduct/fetchProductSlice';
import searchData from './searchData/searchDataSlice';
import fetchLogInSlice from '../api/requests/logIn/fetchLogInSlice';
import favoritesSlice from './favorites/favoritesSlice';
import fetchProductsForAutocompleteSlice from '../api/requests/fetchProductsForAutocomplete/fetchProductsForAutocompleteSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fetchProducts: fetchProductsSlice,
    fetchProduct: fetchProductSlice,
    searchData: searchData,
    fetchLogIn: fetchLogInSlice,
    favorites: favoritesSlice,
    fetchForAutocomplete: fetchProductsForAutocompleteSlice,
  },
});
