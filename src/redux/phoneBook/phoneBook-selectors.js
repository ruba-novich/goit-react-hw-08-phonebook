import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const getFilterContacts = contacts => {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
      );
    };

    return getFilterContacts(contacts);
  },
);

export default {
  getContacts,
  getFilter,
  getVisibleContacts,
};
