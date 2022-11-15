import {Link} from 'react-router-dom'
import { HeaderLink } from './HeaderLink';
import {useDispatch, useSelector } from "react-redux";
import {setPage} from './redux/slice';
import { delCard,logout} from './redux/moda_slice';
import { useState } from 'react';
export function Profile(){
    const dispatch = useDispatch();
    const onLogout = ()=>{
      dispatch(logout());
    }
    const obj = useSelector((state)=>state.blogs.blogsObj);
    const card = useSelector(state=>state.modal.card);
    const opt = card.map((text, index) => {
        const name = obj[text.id].name;
        const str = `${name} size ${text.size}`;
        return <li key={index}>{str}</li>;
      });
    const [value, setValue] = useState(opt);
    const del = ()=>{
        setValue([]);
        dispatch(delCard());
    }
    return (
            <div className='profile'>
                <aside >
                    <div >
                            <label>Имя</label>
                            <input name='Name'></input>
                        </div>
                    <div>
                        <label>Фамилия</label>
                        <input
                        name='Surname'
                        ></input>
                    </div>
                    <div >
                            <label>Адрес</label>
                            <input name='Addres'></input>
                        </div>
                    <div>
                        <label>Телефон</label>
                        <input
                        name='Phone'
                        ></input>
                    </div>
                </aside>
                <div className='right'>
                    <div className='card'>

                        <ol>
                            {value}
                        </ol>
                    </div>
                    <button className='buy'>Оплатить</button>
                    <button className='delete'onClick={del}>Удалить товары из корзины</button>
                </div>
                <Link to='/'><button className='Exit' onClick={onLogout}>Выйти</button></Link>
                
            </div>
        
    );
}