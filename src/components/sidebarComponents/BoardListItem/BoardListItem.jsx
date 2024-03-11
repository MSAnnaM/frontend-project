import { deleteBoard } from '../../../redux/board/boardApi';
import sprite from '../../../img/icons/sprite.svg';
// import css from "./BoardListItem.module.css"
// import { useDispatch, useSelector } from 'react-redux';

// import BoardEditModal from '../BoardEditModal/BoardEditModal';

// import Modal from 'components/UI/Modals/Modal/Modal';
// import { useState } from 'react';

// const BoardListItem = ({ props }) => {

//     const [openModal, setModal] = useState(false);

//     const handleOpenModal = () => {
//         setModal(true);
//     };
//     const dispatch = useDispatch();
//     const handleDeleteBoard = () => {
//         dispatch(deleteBoard(props._id));
//     };

//     return (<div className={css.board_list_item}>
//         <div className={css.board_box}>
//             <svg className={css.board_icon} width={18} height={18}>
//                 <use
//                     href={`${sprite}#${props.icon}`} />
//             </svg>
//             <h4 className={css.board_title}>{props.name}
//             </h4>
//         </div>
//         <div className={css.board_icons}>
//             {openModal && (
//                 <Modal
//                     children={<BoardEditModal openModal={setModal} />}
//                     openModal={setModal}
//                 />
//             )}
//             <button type='button' className={css.button_edit_board} onClick={handleOpenModal}
//             >
//                 <svg className={css.icon_pencil} width={16} height={16}>
//                     <use href={`${sprite}#icon-pencil`} />
//                 </svg>
//             </button>
//             <button type='button' className={css.button_delete_board}
//                 onClick={handleDeleteBoard}
//             >
//                 <svg className={css.icon_trash} width={16} height={16}
//                 >
//                     <use href={`${sprite}#icon-trash`} />
//                 </svg></button>
//         </div>
//         <div className={css.board_line}></div>
//     </div>)
// }
// export default BoardListItem;

// import BoardEditModal from '../BoardEditModal/BoardEditModal';
import Modal from 'components/UI/Modals/Modal/Modal';
import css from './BoardListItem.module.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { getBoardById } from '../../../redux/column/columnApi';
import { setShowBoard } from '../../../redux/column/columnSlice';
import { useState } from 'react';
import EditBoardForm from '../EditBoardForm/EditBoardForm';

const BoardListItem = ({ props, activeElement, setActiveElement }) => {

    const [openModal, setModal] = useState(false);
    // const [activeElement, setActiveElement] = useState(null);
    const handleOpenModal = () => {
        setModal(true);
    };
    const dispatch = useDispatch();
    const handleBoardClick = () => {
        setActiveElement(props._id);
        dispatch(setShowBoard(props));
    };

    return (
        <div className={`${css.board_list_item} ${activeElement === props._id ? css.active : ''}`} onClick={handleBoardClick}>
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
                {openModal && (
                    <Modal
                        children={<EditBoardForm openModal={setModal} props={props} />}
                        openModal={setModal}
                    />)}
                <button type='button' className={css.button_edit_board} onClick={handleOpenModal}
                >
                    <svg className={css.icon_pencil} width={16} height={16}>
                        <use href={`${sprite}#icon-pencil`} />
                    </svg>
                </button>
                <button type='button' className={css.button_delete_board}
                    onClick={() => dispatch(deleteBoard(props._id))}
                >
                    <svg
                        className={css.icon_trash}
                        width={16}
                        height={16}

                    >
                        <use href={`${sprite}#icon-trash`} />
                    </svg>
                </button>
            </div>
            {activeElement === props._id && <div className={css.board_line}></div>}
        </div>
    );

    //   const [openModal, setModal] = useState(false);
    //   // const [activeElement, setActiveElement] = useState(null);
    //   const handleOpenModal = () => {
    //     setModal(true);
    //   };
    //   const dispatch = useDispatch();
    //   const handleBoardClick = () => {
    //     setActiveElement(props._id);
    //     dispatch(setShowBoard(props));
    //   };
    //   return (
    //     <div
    //       className={`${css.board_list_item} ${
    //         activeElement === props._id ? css.active : ''
    //       }`}
    //       onClick={handleBoardClick}
    //     >
    //       <div className={css.board_box}>
    //         <svg className={css.board_icon} width={18} height={18}>
    //           <use href={`${sprite}#${props.icon}`} />
    //         </svg>
    //         <NavLink
    //           to={`${props.name}`}
    //           onClick={() => {
    //             dispatch(setShowBoard(props));
    //           }}
    //         >
    //           <h4 className={css.board_title}>{props.name}</h4>
    //         </NavLink>
    //       </div>
    //       <div className={css.board_icons}>
    //         {openModal && (
    //           <Modal
    //             children={<BoardEditModal openModal={setModal} />}
    //             openModal={setModal}
    //           />
    //         )}
    //         <button
    //           type="button"
    //           className={css.button_edit_board}
    //           onClick={handleOpenModal}
    //         >
    //           <svg className={css.icon_pencil} width={16} height={16}>
    //             <use href={`${sprite}#icon-pencil`} />
    //           </svg>
    //         </button>
    //         <button
    //           type="button"
    //           className={css.button_delete_board}
    //           onClick={() => dispatch(deleteBoard(props._id))}
    //         >
    //           <svg className={css.icon_trash} width={16} height={16}>
    //             <use href={`${sprite}#icon-trash`} />
    //           </svg>
    //         </button>
    //       </div>
    //       {activeElement === props._id && <div className={css.board_line}></div>}
    //     </div>
    //   );

};
export default BoardListItem;
