import { deleteBoard } from '../../../redux/board/boardApi';
import sprite from '../../../img/icons/sprite.svg';
import css from './BoardListItem.module.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { getBoardById } from '../../../redux/column/columnApi';
import { setShowBoard } from '../../../redux/column/columnSlice';

const BoardListItem = ({ props }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.board_list_item}>
      <div className={css.board_box}>
        <svg className={css.board_icon} width={18} height={18}>
          <use href={`${sprite}#${props.icon}`} />
        </svg>
        <NavLink
          to={`${props.name}`}
          onClick={() => {
            dispatch(setShowBoard(props));
          }}
        >
          <h4 className={css.board_title}>{props.name}</h4>
        </NavLink>
      </div>
      <div className={css.board_icons}>
        <svg className={css.icon_pencil} width={16} height={16}>
          <use href={`${sprite}#icon-pencil`} />
        </svg>
        <svg
          className={css.icon_trash}
          width={16}
          height={16}
          onClick={() => dispatch(deleteBoard())}
        >
          <use href={`${sprite}#icon-trash`} />
        </svg>
      </div>
      <div className={css.board_line}></div>
    </div>
  );
};
export default BoardListItem;
