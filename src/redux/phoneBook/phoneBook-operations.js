import axios from 'axios';
import { phoneBooksActions } from '../../redux/phoneBook';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(phoneBooksActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(phoneBooksActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(phoneBooksActions.fetchContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(phoneBooksActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(phoneBooksActions.addContactSuccess(data));
  } catch (error) {
    dispatch(phoneBooksActions.addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(phoneBooksActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(phoneBooksActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(phoneBooksActions.deleteContactError(error));
  }
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
