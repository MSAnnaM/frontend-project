import { useShownBoard } from 'hooks/useShownBoard';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './ChangeColumn.module.css';
import { transportCard } from '../../../redux/card/CardApi';

const ChangeColumn = ({ columnId, cardId, modalClose }) => {
  const columns = useShownBoard().columns.filter(({ _id }) => _id !== columnId);
  const dispatch = useDispatch();

  const handlerClick = newColumnId => {
    const newCardColumnId = {
      cardId,
      newCardData: {
        columnId: newColumnId,
        oldColumnId: columnId,
      },
    };
    dispatch(transportCard(newCardColumnId));
    modalClose();
  };
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {columns.length !== 0 &&
          columns.map(col => (
            <li key={col._id}>
              <Button className={css.btn} onClick={() => handlerClick(col._id)}>
                {col.title}
                <Icon id="icon-normal" className={css.icon} />
              </Button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ChangeColumn;
