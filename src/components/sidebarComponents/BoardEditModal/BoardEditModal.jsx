// import { createPortal } from 'react-dom';
import css from './BoardEditModal.module.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectModal4 } from '../../../redux/modal/modalSelectors';
// import { useEffect } from 'react';
// import { closeModal } from '../../../redux/modal/modalSlice';


const BoardEditModal = () => {
    // const modal4 = useSelector(selectModal4);

    // const dispatch = useDispatch();

    // const handleBackdropClick = event => {
    //     if (event.currentTarget === event.target) {
    //         dispatch(closeModal('modal4'));
    //     }
    // };
    // useEffect(() => {
    //     const handleKeyDown = e => {
    //         if (e.code === 'Escape') {
    //             dispatch(closeModal('modal4'));
    //         }
    //     };
    //     document.addEventListener('keydown', handleKeyDown);

    //     return () => document.removeEventListener('keydown', handleKeyDown);
    // }, [dispatch]);

    return (
        <div className={css.modal_backdrop} >
            <div className={css.modal_content}>
                {/* {<EditBoardForm />} */}
            </div>
        </div>)
}
export default BoardEditModal;
