import { useState, useEffect } from 'react';
import { useShownBoard } from 'hooks/useShownBoard';
import Button from 'components/ScreensPage/Button/Button';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Modal from 'components/UI/Modals/Modal/Modal';
import AddColumn from '../AddColumn/AddColumn';
import EditColumn from '../EditColumn/EditColumn';
import css from './Column.module.css';
import AddCardModal from 'components/ScreensPage/CardModals/AddCardModal/AddCardModal';
import { useDispatch } from 'react-redux';
import { deleteColumn } from '../../../redux/column/columnApi';
import { fetchCards } from '../../../redux/card/CardApi';
import { useFilter } from 'hooks/useFilter';

const Column = () => {
  const [openAddColumnModal, setOpenAddColumnModal] = useState(false);
  const [openEditColumnModal, setOpenEditColumnModal] = useState(false);
  const [openAddCardModal, setAddCardModal] = useState(false);
  const [getIdColumn, setIdColumn] = useState(null);

  const dispatch = useDispatch();
  const shownBoard = useShownBoard();

  const allColumns = shownBoard.columns;

  useEffect(() => {
    allColumns.forEach(col => {
      dispatch(fetchCards(col._id));
    });
  }, [allColumns, dispatch]);

  const filter = useFilter();

  const filteredColumns = allColumns.map(column => {
    if (column.cards) {
      const result = column.cards.filter(card => card.priority === filter);
      return { ...column, cards: result };
    } else {
      return column;
    }
  });

  const columns = filter === '' ? allColumns : filteredColumns;

  const addColumn = () => {
    setOpenAddColumnModal(!openAddColumnModal);
  };

  const editColumn = () => {
    setOpenEditColumnModal(!openEditColumnModal);
  };
  const addCard = () => {
    setAddCardModal(!openAddCardModal);
  };

  return (
    <div>
      <ul className={css.column}>
        {columns.length !== 0 &&
          columns.map(({ _id, title, cards }) => (
            <li key={_id} className={css.column_item}>
              <div className={css.column_section}>
                <p className={css.column_title}>{title}</p>

                <div className={css.column_edit_btn}>
                  <Button
                    className={css.column_edit_btn}
                    onClick={() => {
                      editColumn();
                      setIdColumn(_id);
                    }}
                  >
                    <Icon className={css.column_icon} id="icon-pencil" />
                  </Button>

                  <Button
                    className={css.column_edit_btn}
                    onClick={() => dispatch(deleteColumn(_id))}
                  >
                    <Icon className={css.column_icon} id="icon-trash" />
                  </Button>
                </div>
              </div>

              <div className={css.card_container}>
                <ul className={css.scroll_container}>
                  {cards &&
                    cards.map(card => (
                      <li key={card._id} className={css.card}>
                        <Card data={card} cardId={card._id} />
                      </li>
                    ))}
                </ul>
              </div>
              {openAddCardModal && (
                <Modal openModal={addCard}>
                  <AddCardModal
                    closeModal={addCard}
                    columnId={getIdColumn}
                    boardId={shownBoard._id}
                  />
                </Modal>
              )}
              <Button
                className={css.card_create_btn}
                onClick={() => {
                  addCard();
                  setIdColumn(_id);
                }}
              >
                <div className={css.card_btn_icon_bg}>
                  <Icon className={css.card_btn_icon} id="icon-plus" />
                </div>
                Add another card
              </Button>
            </li>
          ))}
        <li className={css.column_item}>
          <Button className={css.column_create_btn} onClick={addColumn}>
            <div className={css.column_btn_icon_bg}>
              <Icon className={css.column_btn_icon} id="icon-plus" />
            </div>
            <p>Add another column</p>
          </Button>
        </li>
      </ul>
      {openAddColumnModal && (
        <Modal openModal={addColumn}>
          <AddColumn closeModal={addColumn} />
        </Modal>
      )}
      {openEditColumnModal && (
        <Modal openModal={editColumn}>
          <EditColumn closeModal={editColumn} id={getIdColumn} />
        </Modal>
      )}
    </div>
  );
};

export default Column;
