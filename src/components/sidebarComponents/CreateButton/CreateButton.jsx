import css from "./CreateButton.module.css";
import sprite from '../../../img/icons/sprite.svg';

const CreateButton = () => {
    return (
        <div className={css.button_container}>
            <p className={css.sidebar_button_title}>Create a new board</p>
            <button type="button" className={css.create_board_button}>

                <svg className={css.sidebar_button_icon} width="20" height="20" >
                    <use href={`${sprite}#icon-plus`} />
                </svg>

            </button></div>
    )
}
export default CreateButton