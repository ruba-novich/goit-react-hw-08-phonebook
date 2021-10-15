import React, { useEffect } from 'react';

import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  phoneBooksSelectors,
  phoneBooksOperations,
} from '../../redux/phoneBook';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(phoneBooksSelectors.getVisibleContacts);

  useEffect(() => {
    dispatch(phoneBooksOperations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id =>
    dispatch(phoneBooksOperations.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)} className={styles.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
