import { createSlice } from '@reduxjs/toolkit';

const searchData = createSlice({
  name: 'searchData',
  initialState: {
    searchData: [],
  },

  reducers: {
    setSearchData: (state, action) => {
      state.searchData.push(action.payload);
    },
  },
});

export default searchData.reducer;
