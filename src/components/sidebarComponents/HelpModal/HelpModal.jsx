import { createPortal } from 'react-dom';
import css from './HelpModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal2 } from '../../../redux/modal/modalSelectors';
import { useEffect } from 'react';
import { closeModal } from '../../../redux/modal/modalSlice';
import HelpForm from '../HelpForm/HelpForm';

const HelpModal = () => {
  const modal2 = useSelector(selectModal2);

  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      dispatch(closeModal('modal2'));
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal('modal2'));
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return modal2
    ? createPortal(
        <div className={css.modal_backdrop} onClick={handleBackdropClick}>
          <div div className={css.modal_content}>
            <HelpForm />
          </div>
        </div>,
        document.querySelector('#modal-root2')
      )
    : null;
};
export default HelpModal;
