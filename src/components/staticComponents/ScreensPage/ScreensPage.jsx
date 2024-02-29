import ScreensPageInfo from './ScreensPageInfo';
import css from './ScreensPage.module.css';

const ScreensPage = () => {
  const board = true;

  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        {board && <h1 className={css.text}>Title</h1>}
        <button type="button">Filter</button>
      </div>
      {board && <ScreensPageInfo />}
    </div>
  );
};

export default ScreensPage;
