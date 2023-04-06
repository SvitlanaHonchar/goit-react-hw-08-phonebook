import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  postContacts,
  removeContacts,
  requestContacts,
} from 'services.api/api';

export const fetchContacts = createAsyncThunk(
  '/contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  '/contacts/addContacts',
  async (newContact, thunkAPI) => {
    try {
      const contacts = await postContacts(newContact);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  '/contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const contacts = await removeContacts(contactId);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
