import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../..';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  (endpoint) => {
    const data = instance.get(`/products/${endpoint}`).then((res) => res.data);

    return data;
  }
);
