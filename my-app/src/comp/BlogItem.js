import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState } from "react";
import { openModal } from './redux/moda_slice';
export function BlogItem(props){
    const dispatch = useDispatch();
    const {id,price,old_price,name} = props;
    const handleClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(openModal({ data: id}));
      };
    return(
        <section className='good' key={id}>
                <h1>
                    <span className="price">${price} </span>
                    <span className="old_price">{old_price}</span>
                </h1>
                <p>{name}</p>
                <div className="image" style={{"backgroundImage": `url(http://localhost:5000/images/${id}.jpg)`}}></div>
                <div className="flex"><button className="add_to_card" onClick={handleClick}>Добавить в корзину</button></div>
            </section>
    );
}