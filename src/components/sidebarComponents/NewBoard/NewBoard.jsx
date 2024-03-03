import CreateButton from "../CreateButton/CreateButton"
import css from "./NewBoard.module.css";

const NewBoard = () => {
    return (
        <div className={css.boards_list}>
            <p className={css.sidebar_boards_title}>My boards</p>
            <div className={css.create_board}>

                <CreateButton />

            </div>
        </div>
    )
}
export default NewBoard
