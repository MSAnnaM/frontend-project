import classNames from 'classnames';
import EditCardModal from 'components/ScreensPage/CardModals/EditCardModal/EditCardModal';
import { cardPriority } from '../../../const';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './Card.module.css';
import Modal from 'components/UI/Modals/Modal/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../../redux/card/CardApi';
import ChangeColumn from '../ChangeColumn/ChangeColumn';

const Card = ({ data, cardId, columnId }) => {
  const [openEditCardModal, setOpenEditCardModal] = useState(false);
  const [isOpenChangeColumn, setIsOpenChangeColumn] = useState(false);

  const dispatch = useDispatch();

  const editCard = () => {
    setOpenEditCardModal(!openEditCardModal);
  };

  const onChange = () => {
    setIsOpenChangeColumn(!isOpenChangeColumn);
  };

  const { _id, title, description, priority, deadline } = data;

  const priorityCard = {
    [css.priority_low]: priority === cardPriority.LOW,
    [css.priority_medium]: priority === cardPriority.MEDIUM,
    [css.priority_high]: priority === cardPriority.HIGH,
    [css.priority_without]: priority === cardPriority.WO,
  };

  const isDeadline = deadline => {
    const dateDeadline = deadline.split('T')[0].split('-').join('');
    const dateNow = new Date().toISOString().split('T')[0].split('-').join('');

    if (dateDeadline - dateNow <= 1) return true;

    return false;
  };

  const formatDate = date => {
    const dateParts = date.split('T')[0].split('-');
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  };

  return (
    <>
      <div className={css.card_container}>
        <div className={classNames(css.card_priority, priorityCard)}></div>
        <div className={css.content}>
          <h4 className={css.title}>{title}</h4>
          <p className={css.description}>{description}</p>
          <div className={css.additions_wrap}>
            <div className={css.addition}>
              <span className={css.addition_title}>Priority</span>
              <div className={css.priority_wrap}>
                <div
                  className={classNames(css.priority_icon, priorityCard)}
                ></div>
                <span className={css.addition_value}>{priority}</span>
              </div>
            </div>
            <div className={css.addition}>
              <span className={css.addition_title}>Deadline</span>
              <span className={css.addition_value}>{formatDate(deadline)}</span>
            </div>
            <div className={css.actions_wrap}>
              {isDeadline(deadline) && (
                <Icon className={css.deadline_icon} id="icon-bell"></Icon>
              )}
              <ul className={css.actions}>
                <li className={css.action_item}>
                  <Button
                    className={css.action_btn}
                    onClick={() => onChange(_id)}
                  >
                    <Icon className={css.action_btn_icon} id="icon-normal" />
                  </Button>
                </li>
                <li className={css.action_item}>
                  {openEditCardModal && (
                    <Modal openModal={editCard}>
                      <EditCardModal
                        closeModal={editCard}
                        initialValues={{
                          title,
                          description,
                          priority,
                          deadline,
                        }}
                        cardId={cardId}
                      />
                    </Modal>
                  )}
                  <Button className={css.action_btn} onClick={editCard}>
                    <Icon className={css.action_btn_icon} id="icon-pencil" />
                  </Button>
                </li>
                <li className={css.action_item}>
                  <Button
                    className={css.action_btn}
                    onClick={() => dispatch(deleteCard(_id))}
                  >
                    <Icon className={css.action_btn_icon} id="icon-trash" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          {isOpenChangeColumn && (
            <ChangeColumn
              columnId={columnId}
              modalClose={onChange}
              cardId={_id}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
