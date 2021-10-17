import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

import s from './Filter.module.css';
import TextField from '@material-ui/core/TextField';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <TextField
      id="outlined-search"
      type="search"
      variant="outlined"
      label="Find contacts by name"
      value={value}
      name="name"
      className={s.input}
      onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
    />
  );
};

export default Filter;
