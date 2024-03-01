import css from "./HelpButton.module.css";
import sprite from '../../../img/icons/sprite.svg';
const HelpButton = () => {
    return (
        <div className={css.sidebar_help_button}>
            <svg className={css.sidebar_help_logo} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href={`${sprite}#icon-help-circle`} />
            </svg>
            <button type="button" className={css.sidebar_button_help}>Need help?</button>
        </div>
    )
}
export default HelpButton