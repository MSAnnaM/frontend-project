import { createPortal } from 'react-dom';
import css from './CreateBoardModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal1 } from '../../../redux/modal/modalSelectors';
import { useEffect } from 'react';
import { closeModal } from '../../../redux/modal/modalSlice';
import CreateBoardForm from '../CreateBoardForm/CreateBoardForm';

const CreateBoardModal = () => {
  const modal1 = useSelector(selectModal1);

  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      dispatch(closeModal('modal1'));
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal('modal1'));
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return modal1
    ? createPortal(
      <div className={css.modal_backdrop} onClick={handleBackdropClick}>
        <div className={css.modal_content}>
          <CreateBoardForm onClose={() => dispatch(closeModal('modal1'))} />
        </div>
      </div>,
      document.querySelector('#modal-root1')
    )
    : null;
};
export default CreateBoardModal;
