import LogOut from "../LogOut/LogOut"
import Logo from "../Logo/Logo"
import css from "../Sidebar/Sidebar.module.css"
import ListBoards from "../ListBoards/ListBoards"
import HelpMenu from "../HelpMenu/HelpMenu"
import NewBoard from "../NewBoard/NewBoard"
import HelpModal from "../HelpModal/HelpModal"

const Sidebar = () => {

    return (
        <section className={css.sidebar}>
            <div className={css.sidebar_container}>
                <Logo />
                <NewBoard />
                <ListBoards />
                <div className={css.sidebar_down}>
                    <HelpMenu />

                    <LogOut />
                </div>
                <HelpModal />
            </div>
        </section>
    )
}
export default Sidebar