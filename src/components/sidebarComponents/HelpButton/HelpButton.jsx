import css from './HelpButton.module.css';
import sprite from '../../../img/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import HelpModal from "../HelpModal/HelpModal";


const HelpButton = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.sidebar_help_button}>
            <svg className={css.sidebar_help_logo} width="20" height="20" >
                <use href={`${sprite}#icon-help-circle`} />
            </svg>
            <button type="button" className={css.sidebar_button_help} onClick={() => dispatch(openModal('modal2', <HelpModal />))}>Need help?</button>
        </div>
    )
}
export default HelpButton