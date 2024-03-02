import css from "./CreateButton.module.css";
import sprite from '../../../img/icons/sprite.svg';
import { useDispatch } from "react-redux";
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal";
import { openModal } from '../../../redux/modal/modalSlice';

const CreateButton = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.button_container}>
            <p className={css.sidebar_button_title}>Create a new board</p>
            <button type="button" className={css.create_board_button} onClick={() => dispatch(openModal('modal1', <CreateBoardModal />))} >

                <svg className={css.sidebar_button_icon} width="20" height="20" >
                    <use href={`${sprite}#icon-plus`} />
                </svg>

            </button></div>
    )
}
export default CreateButton