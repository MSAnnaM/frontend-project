import LogOut from "../LogOut/LogOut"
import Logo from 'components/UI/Logo/Logo';
import css from "../Sidebar/Sidebar.module.css"
import ListBoards from "../ListBoards/ListBoards"
import HelpMenu from "../HelpMenu/HelpMenu"
import NewBoard from "../NewBoard/NewBoard"
import HelpModal from "../HelpModal/HelpModal"
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal"
import { useSelector } from "react-redux";
import { tokenSelect } from "../../../redux/user/selectors";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
    const token = useSelector(tokenSelect)
    console.log(token)
    const handleBackdropClick = () => {
        toggleMenu();

    };

    return (
        <section className={`${css.sidebar} ${isMenuOpen ? css.active : ""}`} >
            <div className={css.sidebar_container} onClick={handleBackdropClick}>
                <Logo />
                <NewBoard />
                <ListBoards />
                <div className={css.sidebar_down}>
                    <HelpMenu />

                    <LogOut />
                </div>
                <HelpModal />
                <CreateBoardModal />
            </div>
        </section>
    )
}
export default Sidebar