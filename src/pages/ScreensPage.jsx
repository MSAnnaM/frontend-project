import BoardEmpty from '../components/staticComponents/ScreensPage/BoardEmpty/BoardEmpty';
import BoardCreated from 'components/staticComponents/ScreensPage/BoardCreated/BoardCreated';
import css from './ScreensPage.module.css';
import sprite from '../img/icons/sprite.svg';

const ScreensPage = () => {
  const board = true;

  return (
    <div className={css.section}>
      <div className={css.wrapper}>
        {board && <h2 className={css.title}>Board Title</h2>}
        <button className={css.button} type="button" onClick="">
          <svg className={css.icon_filter} width="16" height="16">
            <use href={`${sprite}#icon-filter`} />
          </svg>
          Filters
        </button>
      </div>
      {!board ? <BoardCreated /> : <BoardEmpty />}
    </div>
  );
};

export default ScreensPage;
