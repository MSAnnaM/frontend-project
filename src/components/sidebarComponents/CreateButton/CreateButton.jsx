import css from "../Sidebar/Sidebar.module.css";
const CreateButton = () => {
    return (
        <div className={css.button_container}>
            <p className={css.sidebar_button_title}>Create a new board</p>
            <button type="button" className={css.create_board_button}>

                <svg className={css.sidebar_button_icon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4.16663V15.8333" stroke="#121212" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.16675 10H15.8334" stroke="#121212" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </button></div>
    )
}
export default CreateButton