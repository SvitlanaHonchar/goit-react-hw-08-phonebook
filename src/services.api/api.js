import axios from 'axios';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const registerUser = async credentials => {
  // console.log('register credentials', credentials);
  const { data } = await axios.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

export const loginUser = async credentials => {
  // console.log('login credentials', credentials);
  const { data } = await axios.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

export const logoutUser = async () => {
  await axios.post('/users/logout');
  clearAuthHeader();
};

export const refresh = async persistedToken => {
  setAuthHeader(persistedToken);
  const { data } = await axios.get('/users/current');
  return data;
};

// contacts
export const requestContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContacts = async formData => {
  // console.log('adding contact:', formData);
  const { data } = await axios.post('/contacts', formData);
  return data;
};

export const removeContacts = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
