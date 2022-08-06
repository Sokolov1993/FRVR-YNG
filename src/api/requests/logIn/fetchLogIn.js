import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../..';

export const fetchLogIn = createAsyncThunk('auth/fetchLogIn', (endpoint) => {
  const token = instance
    .post('auth/login', {
      username: endpoint.login,
      password: endpoint.password,
    })
    .then((token) => token.data)
    .catch((err) => {
      console.log(err);
    });
  //   console.log(token);
  return token;
});
