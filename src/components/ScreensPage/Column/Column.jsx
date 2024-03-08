import Button from 'components/ScreensPage/Button/Button';
import css from './Column.module.css';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import { useState } from 'react';
import Modal from 'components/UI/Modals/Modal/Modal';
import AddColumn from '../AddColumn/AddColumn';
import { useShownBoard } from 'hooks/useShownBoard';

const Column = () => {
  const [openAddColumnModal, setOpenAddColumnModal] = useState(false);

  const shownBoard = useShownBoard();

  const columns = shownBoard.columns;

  const addColumn = () => {
    setOpenAddColumnModal(!openAddColumnModal);
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
                  <Button className={css.column_edit_btn}>
                    <Icon className={css.column_icon} id="icon-pencil" />
                  </Button>

                  <Button className={css.column_edit_btn}>
                    <Icon className={css.column_icon} id="icon-trash" />
                  </Button>
                </div>
              </div>

              <div className={css.card_container}>
                <ul className={css.scroll_container}>
                  {cards &&
                    cards.map(card => (
                      <li key={card._id} className={css.card}>
                        <Card data={card} />
                      </li>
                    ))}
                </ul>
              </div>

              <Button className={css.card_create_btn}>
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
    </div>
  );
};

export default Column;
