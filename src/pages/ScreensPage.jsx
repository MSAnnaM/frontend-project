import { useState } from 'react';
import BoardEmpty from '../components/ScreensPage/BoardEmpty/BoardEmpty';
import BoardCreated from 'components/ScreensPage/BoardCreated/BoardCreated';
import Button from 'components/ScreensPage/Button/Button';
import Icon from 'components/ScreensPage/Icon/Icon';
import css from './ScreensPage.module.css';
import Filter from 'components/ScreensPage/Filter/Filter';
import Modal from 'components/UI/Modals/Modal/Modal';
// import Modal from 'components/ScreensPage/Modal/Modal';

const ScreensPage = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const board = !true;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  return (
    <div className={css.section}>
      {openFilter && (
        <Modal
          children={<Filter openModal={setOpenFilter} />}
          openModal={setOpenFilter}
        />
      )}
      <div className={css.wrapper}>
        {<h2 className={css.title}>{board && 'Board Title'}</h2>}
        <Button className={css.button} onClick={handleOpenFilter}>
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
