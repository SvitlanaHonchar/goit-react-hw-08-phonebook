import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { theme } from '../../helpers/theme';
import { ThemeProvider } from '@mui/material/styles';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onRemoveClick = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <ThemeProvider theme={theme}>
      <p className="contact-icon">👨🏻‍🦱</p>
      <p>
        <b>Name:</b> {contact.name}
      </p>
      <p>
        <b>Phone:</b> {contact.number}
      </p>
      <Button
        onClick={onRemoveClick}
        type="button"
        variant="outlined"
        color="primary"
      >
        Remove contact
      </Button>
    </ThemeProvider>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
