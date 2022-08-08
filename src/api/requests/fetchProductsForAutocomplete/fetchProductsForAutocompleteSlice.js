import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsForAutocomplete } from './fetchProductsForAutocomplete';

const fetchProductsForAutocompleteSlice = createSlice({
  name: 'autocompleteProducts',
  initialState: {
    data: [],
    pending: false,
    error: null,
  },
  extraReducers: {
    [fetchProductsForAutocomplete.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.pending = false;
    },
    [fetchProductsForAutocomplete.pending]: (state) => {
      state.pending = true;
    },
    [fetchProductsForAutocomplete.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default fetchProductsForAutocompleteSlice.reducer;
