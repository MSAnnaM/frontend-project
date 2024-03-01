import css from "../Sidebar/Sidebar.module.css"

const Logo = () => {
    return (
        <div className={css.logo}>
            <a className={css.sidebar_logo} href="/src/pages/Home">
                <svg className={css.sidebar_logo_icon} width="32" height="32">
                    <use href="../../services/sprite.svg#icon-chevron_down"></use>
                </svg>
                <span className={css.sidebar_logo_text}>Task Pro</span>
            </a>
        </div>
    )
}
export default Logo