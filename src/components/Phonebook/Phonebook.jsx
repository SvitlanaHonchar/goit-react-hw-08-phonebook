import { useState } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledBtn } from './PhoneBook.styled';
import { addContacts, fetchContacts } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        console.log('not correct option');
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name,
      phone,
      id: nanoid(),
    };

    const isExist = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      alert('This contact already exist');
      return;
    }

    // dispatch(addContact(contact));
    dispatch(addContacts(contact));
    setName('');
    setPhone('');
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="name"
            value={name}
            onChange={handleInput}
            required
          />
        </label>
        <label htmlFor="">
          <span>Number</span>
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="number"
            value={phone}
            onChange={handleInput}
            required
          />
        </label>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </div>
  );
};

export default Phonebook;
