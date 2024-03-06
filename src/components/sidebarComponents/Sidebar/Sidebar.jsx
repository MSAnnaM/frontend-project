import LogOut from "../LogOut/LogOut"
import Logo from 'components/UI/Logo/Logo';
import css from "../Sidebar/Sidebar.module.css"
import ListBoards from "../ListBoards/ListBoards"
import HelpMenu from "../HelpMenu/HelpMenu"
import NewBoard from "../NewBoard/NewBoard"
import HelpModal from "../HelpModal/HelpModal"
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal"



const Sidebar = ({ isMenuOpen, onClick }) => {

    const handleBackdropClick = () => {
        onClick();

    };

    return (<> <div className={`${css.sidebar_backdrop} ${isMenuOpen ? css.active : ""}`} onClick={handleBackdropClick}></div>
        <section className={`${css.sidebar} ${isMenuOpen ? css.active : ""}`} >
            <div className={css.sidebar_container} >
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
        </section></>
    )
}
export default Sidebar