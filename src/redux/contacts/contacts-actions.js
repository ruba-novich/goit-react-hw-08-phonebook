import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const changeFilter = createAction('contacts/changeFilter');

const contactsActions = {
  changeFilter,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  addContactError,
  addContactSuccess,
  addContactRequest,
  fetchContactsError,
  fetchContactsSuccess,
  fetchContactsRequest,
};

export { contactsActions };
