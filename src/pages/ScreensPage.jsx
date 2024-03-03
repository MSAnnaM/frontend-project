import BoardEmpty from '../components/ScreensPage/BoardEmpty/BoardEmpty';
import BoardCreated from 'components/ScreensPage/BoardCreated/BoardCreated';
import Button from 'components/ScreensPage/Button/Button';
import Icon from 'components/ScreensPage/Icon/Icon';
import css from './ScreensPage.module.css';

const ScreensPage = () => {
  const board = true;

  return (
    <div className={css.section}>
      <div className={css.wrapper}>
        {board && <h2 className={css.title}>Board Title</h2>}
        <Button className={css.button}>
          {' '}
          <Icon className={css.icon_filter} id="icon-filter" />
          Filters
        </Button>
      </div>
      {board ? <BoardCreated /> : <BoardEmpty />}
    </div>
  );
};

export default ScreensPage;
