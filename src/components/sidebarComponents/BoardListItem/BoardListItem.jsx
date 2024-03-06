import { deleteBoard } from '../../../redux/board/boardApi';
import sprite from '../../../img/icons/sprite.svg';
import css from "./BoardListItem.module.css"
import { useDispatch } from 'react-redux';



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
            <svg className={css.icon_pencil} width={16} height={16}>
                <use href={`${sprite}#icon-pencil`} />
            </svg>
            <svg className={css.icon_trash} width={16} height={16}
                onClick={() => dispatch(deleteBoard())}
            >
                <use href={`${sprite}#icon-trash`} />
            </svg>
        </div>
        <div className={css.board_line}></div>
    </div>)
}
export default BoardListItem;