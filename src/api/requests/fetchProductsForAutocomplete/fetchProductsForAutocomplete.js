import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../..';

export const fetchProductsForAutocomplete = createAsyncThunk(
  'autocompleteProducts/fetchProductsForAutocomplete',
  (endpoint) => {
    const data = instance.get(endpoint).then((res) => res.data);

    return data;
  }
);
