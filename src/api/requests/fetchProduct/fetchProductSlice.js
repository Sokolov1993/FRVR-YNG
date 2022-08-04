import { createSlice } from '@reduxjs/toolkit';

import { fetchProduct } from './fetchProduct';

const fetchProductSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    pending: false,
    error: null,
  },

  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.pending = false;
    },
    [fetchProduct.pending]: (state) => {
      state.pending = true;
    },
    [fetchProduct.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default fetchProductSlice.reducer;
