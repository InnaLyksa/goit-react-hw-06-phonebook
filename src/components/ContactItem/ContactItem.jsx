import PropTypes from 'prop-types';
import { ReactComponent as Phone } from '../../icons/phone.svg';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { ContactListItem, ContactText, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactListItem>
      <ContactText href={`tel:${number}`}>
        <Phone />
        {name}: {number}
      </ContactText>

      <DeleteBtn type={'button'} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </ContactListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
