import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phoneBooksSelectors, phoneBooksActions } from '../../redux/phoneBook';
import styles from './SearchFilter.module.css';

const SearchFilter = () => {
  const value = useSelector(phoneBooksSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = e =>
    dispatch(phoneBooksActions.changeFilter(e.target.value));

  return (
    <label className={styles.lable}>
      Find contact by name
      <br />
      <input
        className={styles.filters}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default SearchFilter;
