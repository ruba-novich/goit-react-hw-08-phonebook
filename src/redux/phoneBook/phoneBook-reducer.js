import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { phoneBooksActions } from '../phoneBook';

const items = createReducer([], {
  [phoneBooksActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [phoneBooksActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [phoneBooksActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [phoneBooksActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
