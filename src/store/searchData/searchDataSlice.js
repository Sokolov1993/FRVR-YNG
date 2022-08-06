import { createSlice } from '@reduxjs/toolkit';

const searchData = createSlice({
  name: 'searchData',
  initialState: {
    searchData: null,
  },

  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export default searchData.reducer;
export const { setSearchData } = searchData.actions;
