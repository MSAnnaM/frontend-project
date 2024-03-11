import HelpButton from "../HelpButton/HelpButton"
import css from "./HelpMenu.module.css"
import flower from '../../../img/sidebar_img/flower1x.png';
import flower2 from "../../../img/sidebar_img/flower2x.png"

const HelpMenu = () => {
    return (
        <div className={css.sidebar_help}>
            <div className={css.cactus_container}>
                <picture>
                    <source srcSet={flower2} media="(min-resolution: 192dpi)" />
                    <img alt="flower" className={css.sidebar_photo} src={flower} width="54" height="76" />
                </picture>


                <p className={css.sidebar_help_text}>If you need help with <span className={css.sidebar_span}>TaskPro</span>, check out our support resources or reach out to our customer support team.</p>
                <HelpButton />

            </div>
        </div>
    )
}
export default HelpMenu