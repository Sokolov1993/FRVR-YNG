import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './fetchProducts';

const fetchData = createSlice({
  name: 'products',
  initialState: {
    data: [],
    pending: false,
    error: null,
  },

  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.pending = false;
    },
    [fetchProducts.pending]: (state) => {
      state.pending = true;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default fetchData.reducer;
