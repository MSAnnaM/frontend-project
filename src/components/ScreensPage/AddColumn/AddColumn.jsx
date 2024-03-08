import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './AddColumn.module.css';
import { addColumn } from '../../../redux/column/columnApi';
import { useShownBoard } from 'hooks/useShownBoard';

const AddColumn = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { _id: shownBoardId } = useShownBoard();

  const handlerAddColumn = e => {
    e.preventDefault();
    const inputValue = e.target.title.value.trim();
    if (inputValue !== '') {
      const newColumn = {
        title: inputValue,
        board: shownBoardId,
      };
      dispatch(addColumn(newColumn));
      closeModal();
      return;
    }

    return;
  };

  return (
    <div className={css.container}>
      <p className={css.addColumn_title}>Add column</p>
      <form onSubmit={handlerAddColumn}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={css.addColumn_input}
          autoFocus
        />
        <Button type="submit" className={css.addColumn_btn}>
          <span className={css.iconWrap}>
            <Icon id={'icon-plus'} className={css.icon} />
          </span>
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddColumn;
