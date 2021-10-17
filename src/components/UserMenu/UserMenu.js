import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from './UserMenu.module.css';
import Button from '@material-ui/core/Button';
// import avatar from '../../images/avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      {/* <img src={avatar} alt="Default Avatar" width="32" className={s.avatar} /> */}
      <span className={s.name}>Welcome, {name}</span>
      <Button
        variant="contained"
        size="small"
        color="primary"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Sign out
      </Button>
    </div>
  );
}
