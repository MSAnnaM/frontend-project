import { useEffect, useState } from 'react';
import BoardEmpty from '../components/ScreensPage/BoardEmpty/BoardEmpty';
import BoardCreated from 'components/ScreensPage/BoardCreated/BoardCreated';
import Button from 'components/ScreensPage/Button/Button';
import Icon from 'components/ScreensPage/Icon/Icon';
import css from './ScreensPage.module.css';
import Filter from 'components/ScreensPage/Filter/Filter';
import Modal from 'components/UI/Modals/Modal/Modal';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showBoard } from '../redux/column/columnSlice';

const ScreensPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [innerWidth, setInnerWidth] = useState(null);
  const dispatch = useDispatch();

  const { boardName } = useParams();

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  useEffect(() => {
    const handleResizePage = () => setInnerWidth(window.innerWidth);
    window.addEventListener('resize', handleResizePage);

    return () => {
      window.removeEventListener('resize', handleResizePage);
    };
  }, [boardName, innerWidth]);

  useEffect(() => {
    if (!boardName) dispatch(showBoard());
  }, [boardName, dispatch]);

  return (
    <div className={css.section}>
      {openFilter && (
        <Modal
          children={<Filter openModal={setOpenFilter} />}
          openModal={setOpenFilter}
        />
      )}
      <div className={css.wrapper}>
        {<h2 className={css.title}>{boardName}</h2>}
        <Button className={css.button} onClick={handleOpenFilter}>
          {' '}
          <Icon className={css.icon_filter} id="icon-filter" />
          Filters
        </Button>
      </div>
      {boardName ? <BoardCreated /> : <BoardEmpty />}
    </div>
  );
};

export default ScreensPage;
