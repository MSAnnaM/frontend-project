import LogOut from "../LogOut/LogOut"
import Logo from 'components/UI/Logo/Logo';
import css from "../Sidebar/Sidebar.module.css"
import ListBoards from "../ListBoards/ListBoards"
import HelpMenu from "../HelpMenu/HelpMenu"
import NewBoard from "../NewBoard/NewBoard"
import HelpModal from "../HelpModal/HelpModal"
import CreateBoardModal from "../CreateBoardModal/CreateBoardModal"


const Sidebar = ({ isMenuOpen, toggleMenu }) => {

    console.log(toggleMenu)
    const handleBackdropClick = () => {
        toggleMenu();

    };

    return (
        <section className={`${css.sidebar} ${isMenuOpen ? css.active : ""}`} onClick={handleBackdropClick}>
            <div className={css.sidebar_container}>
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