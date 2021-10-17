import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import s from './ContactsList.module.css';
import Button from '@material-ui/core/Button';

function ContactList() {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.listItem}>
            <span className={s.name}>{name}:</span>
            <span className={s.number}>{number}</span>

            <Button
              variant="contained"
              color="default"
              size="small"
              onClick={() => onDeleteContact(id)}
              className={s.button}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
