// import { useDispatch } from 'react-redux';
import Column from '../Column/Column';
import css from './BoardCreated.module.css';
// import { useEffect } from 'react';
// import { getColumns } from '../../../redux/column/columnApi';
// import { useShownBoard } from 'hooks/useShownBoard';

const BoardCreated = () => {
  // const dispatch = useDispatch();
  // const shownBoard = useShownBoard();

  // useEffect(() => {
  //   dispatch(getColumns(shownBoard._id));
  //   // let vdc = shownBoard.columns.length;
  // }, [dispatch, shownBoard._id]);

  return (
    <div className={css.dashboard}>
      <Column />
    </div>
  );
};

export default BoardCreated;
