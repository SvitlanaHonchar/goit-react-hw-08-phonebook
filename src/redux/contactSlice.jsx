import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  // Об'єкт редюсерів
  reducers: {
    // addContact(state, action) {
    //   state.items = [...state.items, action.payload];
    // },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },

  // fetch contacts from database
  extraReducers: builder =>
    builder
      // ----fetch contacts----
      .addCase(fetchContacts.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoading = false;

        // console.log('fetchContacts', payload);
        state.items = [...payload];
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      // ----post contacts----
      .addCase(addContacts.pending, state => {
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        console.log('addContacts', payload);
        state.items = [...state.items, payload];
      })
      .addCase(addContacts.rejected, (state, { payload }) => {
        state.error = payload;
      })
      // ----delete contacts----
      .addCase(deleteContacts.pending, state => {
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.error = null;
        // console.log(payload);
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addCase(deleteContacts.rejected, (state, { payload }) => {
        state.error = payload;
      }),
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
