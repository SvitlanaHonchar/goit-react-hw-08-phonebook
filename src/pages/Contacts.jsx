import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Phonebook from 'components/Phonebook/Phonebook';
import React from 'react';

const Contacts = () => {
  return (
    <>
      <Phonebook />
      <Filter />

      <ContactList />
    </>
  );
};

export default Contacts;
