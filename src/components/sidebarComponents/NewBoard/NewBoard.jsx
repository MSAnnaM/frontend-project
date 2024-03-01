import CreateButton from "../CreateButton/CreateButton"
import css from "./NewBoard.module.css";
import sprite from '../../../img/icons/sprite.svg';
const NewBoard = () => {
    return (
        <div className={css.boards_list}>
            <p className={css.sidebar_boards_title}>My boards</p>
            <div className={css.create_board}>
                <svg className={css.sidebar_line} width="212" height="2">
                    <use href={`${sprite}#icon-Vector`} />
                </svg>
                <CreateButton />
                <svg className={css.sidebar_line} width="212" height="2">
                    <use href={`${sprite}#icon-Vector`} />
                </svg>
            </div>
        </div>
    )
}
export default NewBoard
