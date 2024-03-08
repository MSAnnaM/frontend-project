import { deleteBoard } from '../../../redux/board/boardApi';
import sprite from '../../../img/icons/sprite.svg';
import css from "./BoardListItem.module.css"
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import BoardEditModal from '../BoardEditModal/BoardEditModal';



const BoardListItem = ({ props }) => {
    const dispatch = useDispatch();

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
            <button type='button' className={css.button_edit_board} onClick={() => dispatch(openModal('modal3', <BoardEditModal />))}>
                <svg className={css.icon_pencil} width={16} height={16}>
                    <use href={`${sprite}#icon-pencil`} />
                </svg>
            </button>
            <button type='button' className={css.button_delete_board} onClick={dispatch(deleteBoard)}>
                <svg className={css.icon_trash} width={16} height={16}
                    onClick={() => dispatch(deleteBoard())}
                >
                    <use href={`${sprite}#icon-trash`} />
                </svg></button>
        </div>
        <div className={css.board_line}></div>
    </div>)
}
export default BoardListItem;