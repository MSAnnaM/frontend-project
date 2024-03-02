import css from './HelpButton.module.css';
import sprite from '../../../img/icons/sprite.svg';
const HelpButton = () => {
  return (
    <div className={css.sidebar_help_button}>
      <svg className={css.sidebar_help_logo} width="20" height="20">
        <use href={`${sprite}#icon-help-circle`} />
      </svg>
      <button type="button" className={css.sidebar_button_help}>
        Need help?
      </button>
    </div>
  );
};
export default HelpButton;
