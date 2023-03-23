import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { StyledLi, StyledOl } from './ContactList.styled';
import {
  // getContacts,
  // getFilter,
  getFilterSelector,
} from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const visibleContacts = useSelector(getFilterSelector);
  // console.log(contacts);
  return (
    <div>
      <StyledOl>
        {visibleContacts.length === 0 ? (
          <i>-- no contacts here --</i>
        ) : (
          visibleContacts.map(contact => {
            return (
              <StyledLi key={contact.name}>
                <Contact contact={contact} />
              </StyledLi>
            );
          })
        )}
      </StyledOl>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
};
