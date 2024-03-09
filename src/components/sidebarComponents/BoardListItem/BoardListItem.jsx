import { deleteBoard } from '../../../redux/board/boardApi';
import sprite from '../../../img/icons/sprite.svg';
import css from "./BoardListItem.module.css"
import { useDispatch, useSelector } from 'react-redux';
// import { openModal } from '../../../redux/modal/modalSlice';
import BoardEditModal from '../BoardEditModal/BoardEditModal';
// import { selectModal3, selectModal4 } from '../../../redux/modal/modalSelectors';
import Modal from 'components/UI/Modals/Modal/Modal';
import { useState } from 'react';


const BoardListItem = ({ props }) => {

    const [openModal, setModal] = useState(false);

    const handleOpenModal = () => {
        setModal(true);
    };
    const dispatch = useDispatch();
    const handleDeleteBoard = () => {
        dispatch(deleteBoard(props._id));
    };
    // const handleEditBoardClick = () => {
    //     dispatch(openModal('modal4'), < BoardEditModal />);
    // };


    return (<div className={css.board_list_item}>
        <div className={css.board_box}>
            <svg className={css.board_icon} width={18} height={18}>
                <use
                    href={`${sprite}#${props.icon}`} />
            </svg>
            <h4 className={css.board_title}>{props.name}
            </h4>
        </div>
        <div className={css.board_icons}>
            {openModal && (
                <Modal
                    children={<BoardEditModal openModal={setModal} />}
                    openModal={setModal}
                />
            )}
            <button type='button' className={css.button_edit_board} onClick={handleOpenModal}
            >
                <svg className={css.icon_pencil} width={16} height={16}>
                    <use href={`${sprite}#icon-pencil`} />
                </svg>
            </button>
            <button type='button' className={css.button_delete_board}
                onClick={handleDeleteBoard}
            >
                <svg className={css.icon_trash} width={16} height={16}
                >
                    <use href={`${sprite}#icon-trash`} />
                </svg></button>
        </div>
        <div className={css.board_line}></div>
    </div>)
}
export default BoardListItem;