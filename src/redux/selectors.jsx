import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.value;
export const getLoadingStatus = state => state.contacts.isLoading;
export const getLoadingUser = state => state.users.isLoading;
export const getLoggedInStatus = state => state.users.isLoggedIn;
export const getUser = state => state.users.user;

export const getFilterSelector = createSelector(
  // Масив вхідних селекторів
  [getContacts, getFilter],
  // Функція перетворювач
  (contacts, filterValue) => {
    // Виконуємо обчислення та повертаємо результат
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
