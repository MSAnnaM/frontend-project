import { useDispatch } from 'react-redux';
import { logoutUser } from "../../../redux/user/userApi"
import css from "./LogOut.module.css"
import sprite from '../../../img/icons/sprite.svg';


const LogOut = () => {
    const dispatch = useDispatch();
    return (
        <div className={css.logout}>
            <button className={css.logout_button} type="button"
                onClick={() => dispatch(logoutUser())}
            >
                <svg className={css.logout_button_icon} width="32" height="32" >
                    <use href={`${sprite}#icon-login`} />
                </svg>

            </button>
            <p className={css.logout_button_text}>Log out</p>
        </div>
    )
}
export default LogOut