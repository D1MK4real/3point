import { Link } from 'react-router-dom';
import { HeaderLink } from './HeaderLink';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from './redux/slice';
export function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.modal.modalState);
  let param = ``;
  if (state === true) {
    param = '/profile';
  } else {
    param = '/login';
  }
  return (
    <header className='main-header'>
      <Link to=''>
        <button className='roundable' onClick={() => dispatch(setPage())}>
          Главная
        </button>
      </Link>
      <Link to='/men'>
        <button className='roundable'>Для мужчин</button>
      </Link>
      <Link to='/women'>
        <button className='roundable'>Для женщин</button>
      </Link>
      <Link to={param}>
        <button className='roundable-right'>Профиль</button>
      </Link>
    </header>
  );
}
