import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Column from '../Column/Column';
import css from './BoardCreated.module.css';
import { useEffect } from 'react';
import { getColumns } from '../../../redux/column/columnApi';
import { useShownBoard } from 'hooks/useShownBoard';

const BoardCreated = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id: boardId } = useShownBoard();

  useEffect(() => {
    if (boardId) dispatch(getColumns(boardId)) ;
    else navigate('/home');
  }, [dispatch, boardId, navigate]);

  return (
    <div className={css.dashboard}>
      <Column />
    </div>
  );
};

export default BoardCreated;
