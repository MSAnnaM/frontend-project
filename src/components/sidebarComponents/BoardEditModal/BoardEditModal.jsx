import { createPortal } from 'react-dom';
import css from './BoardEditModal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectModal3 } from '../../../redux/modal/modalSelectors';
import { useEffect } from 'react';
import { closeModal } from '../../../redux/modal/modalSlice';


const BoardEditModal = () => {
    const modal3 = useSelector(selectModal3);

    const dispatch = useDispatch();

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            dispatch(closeModal('modal3'));
        }
    };
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                dispatch(closeModal('modal3'));
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [dispatch]);

    return modal3
        ? createPortal(
            <div className={css.modal_backdrop} onClick={handleBackdropClick}>
                <div className={css.modal_content}>
                    {/* <EditBoardForm onClose={() => dispatch(closeModal('modal3'))} /> */}
                </div>
            </div>,
            document.querySelector('#modal-root3')
        )
        : null;
};
export default BoardEditModal;
