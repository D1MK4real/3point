import {Link} from 'react-router-dom'
import { HeaderLink } from './HeaderLink';
import {useDispatch } from "react-redux";
import {setPage} from './redux/slice';
import { login } from './redux/moda_slice';

export function Login(){
  const dispatch = useDispatch();
    const onLogin = ()=>{
      dispatch(login());
    }
    return ( <form className='enterance'>
        <div >
            <label>Логин &nbsp;&nbsp;</label>
            <input name='login'></input>
        </div>
      <div>
        <label>Пароль&nbsp;</label>
        <input
          name='password'
        ></input>
      </div>
      <div className='error'></div>
      <Link to={'/profile'} onClick={onLogin}><button className='login' type='submit'>Войти</button></Link>
      <label>Нет аккаунта?   Зарегестрируйстесь</label>
      <Link to={'/registration'}><button className='registration' type='submit' >Регистрация</button></Link>
    </form>

    );
}