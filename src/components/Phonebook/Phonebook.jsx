import { useState } from 'react';
import { StyledForm, StyledH2 } from './PhoneBook.styled';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addContacts, fetchContacts } from 'redux/contacts/operations';
import { Button, TextField } from '@mui/material';
import { theme } from '../../helpers/theme';
import { ThemeProvider } from '@mui/material/styles';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
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
      case 'number':
        setNumber(e.target.value);
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
      number,
    };

    const isExist = contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      alert('This contact already exist');
      return;
    }

    dispatch(addContacts(contact));
    setName('');
    setNumber('');
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledH2>- Manage PhoneBook -</StyledH2>

      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            color="secondary"
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
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            color="secondary"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="number"
            value={number}
            onChange={handleInput}
            required
          />
        </label>
        <Button type="submit" variant="contained" color="secondary">
          Add contact
        </Button>
      </StyledForm>
    </ThemeProvider>
  );
};

export default Phonebook;
