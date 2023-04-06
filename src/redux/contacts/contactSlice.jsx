import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { requestLogout } from 'redux/user/operations';
import { addContacts, deleteContacts, fetchContacts } from './operations';

// array for getActions function
const extraActions = [addContacts, deleteContacts, fetchContacts];
// function for isAnyOf in addMatchers
const getActions = type => extraActions.map(action => action[type]);

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
  reducers: {},

  // fetch contacts from database
  extraReducers: builder =>
    builder
      // ----fetch contacts----
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = [...payload];
      })
      // ----post contacts----
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      // ----delete contacts----
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addCase(requestLogout.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      // ----addMatcher----
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.error = null;
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.error = null;
        state.isLoading = false;
      }),
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
