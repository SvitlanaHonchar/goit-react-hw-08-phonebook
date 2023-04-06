import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  requestLogin,
  requestLogout,
  requestRefresh,
  requestRegister,
} from './operations';

// array for getActions function
const extraActions = [
  requestLogin,
  requestLogout,
  requestRefresh,
  requestRegister,
];
// function for isAnyOf in addMatchers
const getActions = type => extraActions.map(action => action[type]);

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
      .addCase(requestRegister.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      // ------------------login user --------------
      .addCase(requestLogin.fulfilled, (state, { payload }) => {
        console.log('requestLogin', payload);
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      // ------------------logout user --------------
      .addCase(requestLogout.fulfilled, state => {
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      })
      // ------------------refresh user --------------
      .addCase(requestRefresh.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
      })
      // ----addMatcher----
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.error = null;
        state.status = 'pending';
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.status = 'rejected';
        state.error = payload;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.error = null;
        state.status = 'resolved';
        state.isLoading = false;
      }),
});

// Редюсер слайсу
export const usersReducer = userSlice.reducer;
