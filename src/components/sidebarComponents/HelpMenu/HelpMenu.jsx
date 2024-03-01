import HelpButton from "../HelpButton/HelpButton"
import css from "../Sidebar/Sidebar.module.css"

const HelpMenu = () => {
    return (
        <div className={css.sidebar_help}>
            <div className={css.cactus_container}>
                <img alt="flower" className={css.sidebar_photo} src="../../../img/sidebar_img" width="54" height="76" />
                <p className={css.sidebar_help_text}>If you need help with TaskPro, check out our support resources or reach out to our customer support team.</p>
                <HelpButton />

            </div>
        </div>
    )
}
export default HelpMenu