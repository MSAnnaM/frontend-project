import CreateButton from "../CreateButton/CreateButton"
import css from "../Sidebar/Sidebar.module.css";

const NewBoard = () => {
    return (
        <div className={css.boards_list}>
            <p className={css.sidebar_boards_title}>My boards</p>
            <div className={css.create_board}>
                <svg className={css.sidebar_line} width="212" height="2" viewBox="0 0 212 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H212" stroke="white" strokeOpacity="0.1" />
                </svg>
                <CreateButton />
                <svg className={css.sidebar_line} width="212" height="2" viewBox="0 0 212 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H212" stroke="white" strokeOpacity="0.1" />
                </svg>
            </div>
        </div>
    )
}
export default NewBoard