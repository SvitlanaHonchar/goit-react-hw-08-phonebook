import { createSlice } from '@reduxjs/toolkit';
import {
  requestLogin,
  requestLogout,
  requestRefresh,
  requestRegister,
} from './operations';

const userSlice = createSlice({
  // Ім'я слайсу
  name: 'users',
  // Початковий стан редюсера слайсу
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    status: 'idle',
  },
  reducers: {},
  // user database
  extraReducers: builder =>
    builder
      // --------register user----------
      .addCase(requestRegister.pending, state => {
        state.error = null;
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(requestRegister.fulfilled, (state, { payload }) => {
        console.log('requestRegister', payload);

        state.error = null;
        state.status = 'resolved';
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(requestRegister.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
        state.isLoading = false;
      })
      // ------------------login user --------------
      .addCase(requestLogin.pending, state => {
        state.error = null;
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(requestLogin.fulfilled, (state, { payload }) => {
        console.log('requestLogin', payload);

        state.error = null;
        state.status = 'resolved';
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(requestLogin.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
        state.isLoading = false;
      })
      // ------------------logout user --------------
      .addCase(requestLogout.pending, state => {
        state.error = null;
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(requestLogout.fulfilled, state => {
        state.error = null;
        state.status = 'resolved';
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(requestLogout.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
        state.isLoading = false;
      })
      // ------------------refresh user --------------
      .addCase(requestRefresh.pending, state => {
        state.error = null;
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(requestRefresh.fulfilled, (state, { payload }) => {
        state.error = null;
        state.status = 'resolved';
        state.isLoading = false;
        state.isLoggedIn = true;
        console.log(payload);
        state.user = payload;
      })
      .addCase(requestRefresh.rejected, (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
        state.isLoading = false;
      }),
});

// Редюсер слайсу
export const usersReducer = userSlice.reducer;
