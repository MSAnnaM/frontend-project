import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useShownBoard } from 'hooks/useShownBoard';
import { updateColumnById } from '../../../redux/column/columnApi';
import { Field, Form, Formik } from 'formik';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './EditColumn.module.css';

const EditColumn = ({ id, closeModal }) => {
  const dispatch = useDispatch();

  const { title, boardId } = useShownBoard().columns.find(
    ({ _id }) => _id === id
  );

  const [newColumnTitle, setNewColumnTitle] = useState(title);

  const handlerEditColumn = e => {
    e.preventDefault();

    const editColumn = {
      _id: id,
      newColumnData: {
        title: newColumnTitle,
        // board: boardId,
      },
    };

    if (newColumnTitle.trim() !== '') {
      dispatch(updateColumnById(editColumn));
      closeModal();
      return;
    }

    return;
  };

  const handlerInputValue = ({ target }) => setNewColumnTitle(target.value);

  return (
    <div className={css.container}>
      <p className={css.editColumn_title}>Edit column</p>
      <Formik>
        <Form onSubmit={handlerEditColumn}>
          <Field
            type="text"
            name="title"
            placeholder="Title"
            className={css.editColumn_input}
            autoFocus
            value={newColumnTitle}
            onChange={handlerInputValue}
          ></Field>
          <Button type="submit" className={css.editColumn_btn}>
            <span className={css.iconWrap}>
              <Icon id={'icon-plus'} className={css.icon} />
            </span>
            Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditColumn;
