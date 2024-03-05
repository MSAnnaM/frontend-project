import css from "./ListBoards.module.css";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import BoardListItem from "../BoardListItem/BoardListItem";


const ListBoards = ({ boards }) => {
    // const dispatch = useDispatch();

    // useEffect(() => {

    //     dispatch();
    // }, [dispatch]);

    if (!boards || boards.length === 0) {
        return <div className={css.sidebar_boards_list}></div>;
    }
    return (
        <div>
            <ul>
                {boards.map((title, color, id, icon) => (<li key={id}><BoardListItem props={{ title, color, icon }} /></li>))}
            </ul>

        </div>
    )
}
export default ListBoards;