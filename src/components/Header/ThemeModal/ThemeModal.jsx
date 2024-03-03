import style from './ThemeModal.module.css';

export const ThemeModal = () => {
  return (
    <>
      <div className={style.modal_box}>
        <ul className={style.modal_list}>
          <li>
            <button type="button" className={style.modal_theme_btn}>
              Ligth
            </button>
          </li>
          <li>
            <button type="button" className={style.modal_theme_btn}>
              Dark
            </button>
          </li>
          <li>
            <button type="button" className={style.modal_theme_btn}>
              Violet
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
