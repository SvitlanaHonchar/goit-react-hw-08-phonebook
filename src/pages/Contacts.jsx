import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Phonebook from 'components/Phonebook/Phonebook';
import React from 'react';

const Contacts = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <Phonebook />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </>
  );
};

export default Contacts;
