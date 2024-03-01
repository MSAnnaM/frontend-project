import { useDispatch } from 'react-redux';
import { logout } from "../../../redux/auth/operations"
import css from "../Sidebar/Sidebar.module.css"

const LogOut = () => {
    const dispatch = useDispatch();
    return (
        <div className={css.logout}>
            <button className={css.logout_button} type="button" onClick={() => dispatch(logout())}>
                <svg className={css.logout_button_icon} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8667 10.08C12.28 5.28001 14.7467 3.32001 20.1467 3.32001H20.32C26.28 3.32001 28.6667 5.70667 28.6667 11.6667V20.36C28.6667 26.32 26.28 28.7067 20.32 28.7067H20.1467C14.7867 28.7067 12.32 26.7733 11.88 22.0533" stroke="#BEDBB0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.66666 16H19.84" stroke="#BEDBB0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.8667 11.5333L21.3333 16L16.8667 20.4667" stroke="#BEDBB0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className={css.logout_button_text}>Log out</p>
            </button>
        </div>
    )
}
export default LogOut