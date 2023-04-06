import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { StyledLi, StyledOl } from './ContactList.styled';
import { getFilterSelector } from 'redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const visibleContacts = useSelector(getFilterSelector);
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
