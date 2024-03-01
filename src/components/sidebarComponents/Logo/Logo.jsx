import css from "./Logo.module.css"
import sprite from '../../../img/icons/sprite.svg';
const Logo = () => {
    return (
        <div className={css.logo}>
            <div className={css.logo_icon_box}>
                <svg className={css.sidebar_logo_icon} width="12" height="16">
                    <use href={`${sprite}#icon-logo`} />
                </svg>
            </div>
            <span className={css.sidebar_logo_text}>Task Pro</span>

        </div>
    )
}
export default Logo