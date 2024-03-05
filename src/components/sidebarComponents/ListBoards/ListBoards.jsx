import css from "./ListBoards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BoardListItem from "../BoardListItem/BoardListItem";
// import { fetchBoards } from "../../../redux/board/boardApi";
import { selectBoards } from "../../../redux/board/selectors";


const ListBoards = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {

    //     dispatch(fetchBoards());
    // }, [dispatch]);

    const boards = useSelector(selectBoards);
    console.log(boards)
    if (!boards || boards.length === 0) {
        return <div className={css.sidebar_boards_list}></div>;
    }
    return (
        <div className={css.sidebar_boards_list}>
            <ul>

                {boards.map(({ name, _id, icon }) => (<li key={_id} className={css.board_list_item}>
                    <BoardListItem props={{ name, icon }} /></li>))}
            </ul>

        </div>
    )
}
export default ListBoards;
// import React from 'react';
// import { animateScroll } from 'react-scroll';

// const Sidebar = ({ items }) => {
//     const scrollToTop = () => {
//         animateScroll.scrollToTop();
//     };

//     const scrollToBottom = () => {
//         animateScroll.scrollToBottom();
//     };

//     return (
//         <div className="sidebar">
//             <div className="border-list">
//                 {items.length > 2 && (
//                     <div className="scrollbar-container">
//                         <button onClick={scrollToTop}>Прокрутити вгору</button>
//                         <div className="list">
//                             {items.map((item, index) => (
//                                 <div key={index} className="list-item">
//                                     {item}
//                                 </div>
//                             ))}
//                         </div>
//                         <button onClick={scrollToBottom}>Прокрутити вниз</button>
//                     </div>
//                 )}
//                 {items.length <= 2 && (
//                     <div className="list">
//                         {items.map((item, index) => (
//                             <div key={index} className="list-item">
//                                 {item}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Sidebar;
