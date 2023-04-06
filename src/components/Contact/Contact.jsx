import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onRemoveClick = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <>
      👨🏻‍🦱 {contact.name}: {contact.number}
      <button onClick={onRemoveClick} type="button">
        Remove contact
      </button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
};
