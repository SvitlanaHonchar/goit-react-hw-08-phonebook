import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refresh, registerUser } from 'services.api/api';

export const requestRegister = createAsyncThunk(
  '/users/signup',
  async (credentials, thunkAPI) => {
    try {
      const userData = await registerUser(credentials);
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestLogin = createAsyncThunk(
  '/users/login',
  async (credentials, thunkAPI) => {
    try {
      const userData = await loginUser(credentials);
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestLogout = createAsyncThunk(
  '/users/logout',
  async (_, thunkAPI) => {
    try {
      const userData = await logoutUser();
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestRefresh = createAsyncThunk(
  '/users/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.users.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const userData = await refresh(persistedToken);
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
