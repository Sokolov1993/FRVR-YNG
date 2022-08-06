import { createSlice } from '@reduxjs/toolkit';
import { fetchLogIn } from './fetchLogIn';

const fetchLogInSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isOpenAuthForm: false,
    pending: false,
    error: null,
  },

  reducers: {
    isOpenAuthForm: (state, action) => {
      state.isOpenAuthForm = action.payload;
    },

    logOut: (state) => {
      state.token = null;
      localStorage.clear();
      state.isOpenAuthForm = false;
    },
  },

  extraReducers: {
    [fetchLogIn.fulfilled]: (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      }
      state.pending = false;
    },
    [fetchLogIn.pending]: (state) => {
      state.pending = true;
    },
    [fetchLogIn.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default fetchLogInSlice.reducer;
export const { isOpenAuthForm, logOut } = fetchLogInSlice.actions;
