import './Modal.css';
import { closeModal } from '../redux/moda_slice';
import { useDispatch } from 'react-redux';
import close from '../../close.png';
export function Modal(props) {
  const dispatch = useDispatch();
  const { children } = props;

  const handleOverlayClick = () => {
    dispatch(closeModal());
  };
  const handleModalClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <div className='cont' onClick={handleOverlayClick}>
      <div className='modal' onClick={handleModalClick}>
        <img
          className='modal-close'
          src={close}
          onClick={handleOverlayClick}
        ></img>
        {children}
      </div>
    </div>
  );
}
