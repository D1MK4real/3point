import { Link } from 'react-router-dom';
import { HeaderLink } from './HeaderLink';
import { useDispatch } from 'react-redux';
import { setPage } from './redux/slice';
import { login } from './redux/moda_slice';

export function Registration() {
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(login());
  };
  return (
    <form className='enterance'>
      <aside>
        <div className='flex_input'>
          <label>Имя</label>
          <input name='Name'></input>
        </div>
        <div className='flex_input'>
          <label>Фамилия</label>
          <input name='Surname'></input>
        </div>
        <div className='flex_input'>
          <label>Дата рождения</label>
          <input name='Birthday'></input>
        </div>
        <div className='flex_input'>
          <label>Номер телефона</label>
          <input name='Phone'></input>
        </div>
        <div className='flex_input'>
          <label>E-mail</label>
          <input name='e-mail'></input>
        </div>
        <div className='flex_input'>
          <label>Пароль</label>
          <input name='password'></input>
        </div>
      </aside>
      <Link to={'/profile'}>
        <button className='registration ' onClick={onLogin} type='submit'>
          Зарегестрироваться
        </button>
      </Link>
    </form>
  );
}
