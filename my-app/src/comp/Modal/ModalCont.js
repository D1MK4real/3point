import { useSelector } from "react-redux";
import { Modal } from "./Modal";
import { addCard, closeModal } from '../redux/moda_slice';
import { useDispatch } from 'react-redux';
import { useState } from "react";

export function ModalContainer() {
   const dispatch = useDispatch();
   const handleOverlayClick = () => {
    dispatch(closeModal());
};  


    
    const [value, setValue] = useState('');
    const { modalID, modalState } = useSelector((state) => state.modal);
    const sizes = useSelector(state=>state.blogs.blogsObj);



   const add = ()=>{
    if(value===''){
      handleOverlayClick();
      return;
    }
    dispatch(addCard([{"size":value,"id":modalID}]))
    handleOverlayClick();
   }
    if (!modalID) {
        return null;
      }
    const size = sizes[modalID].size;
    

    function renderContent() {
      switch (modalState) {
        case false: {
          return <>
          <div className="Enter">
               <div className="text">Войдите в свой личный кабинет</div>
          </div>
          <div className="flex"><button className="OK"onClick={handleOverlayClick }>Хорошо</button></div>
          </>
        }
  
        case true: {
          const options = size.map((text, index) => {
            return <option key={index}>{text}</option>;
          });
          
          return <>
          <div className="Enter">
              <p>{'Выберите размер:  '}</p>
              <select className="select" value={value} onChange={(event) => setValue(event.target.value)}>
              <option>Выберите размер</option>{options}
            </select>
            </div>
            <div className="flex"><button className="OK"onClick={add}>Добавить</button></div>
            </>
        }
  
        default: {
          return null;
        }
      }
    }
  
    return <Modal>{renderContent()}</Modal>;
  }