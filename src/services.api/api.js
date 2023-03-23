import axios from 'axios';

const BASE_URL = 'https://64189bf829e7e36438ecce1f.mockapi.io/';

// const BASE_HEROKUAPP_URL = 'https://connections-api.herokuapp.com/';
export const requestContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}contacts`);
  return data;
};

// export const requestContacts = async () => {
//   const { data } = await axios.get(`${BASE_HEROKUAPP_URL}contacts`);
//   return data;
// };

export const postContacts = async newContact => {
  const { data } = await axios.post(`${BASE_URL}contacts`, newContact);
  return data;
};

export const removeContacts = async contactId => {
  const { data } = await axios.delete(`${BASE_URL}contacts/${contactId}`);
  return data;
};
