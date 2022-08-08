import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../..';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  (endpoint) => {
    const data = instance
      .get(endpoint.endpoint, { params: { limit: endpoint.paramShowMore } })
      .then((res) => res.data);

    return data;
  }
);
