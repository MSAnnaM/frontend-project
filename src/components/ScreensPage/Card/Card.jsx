import classNames from 'classnames';
import EditCardModal from 'components/ScreensPage/CardModals/EditCardModal/EditCardModal';
import { cardPriority } from '../../../const';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './Card.module.css';
import Modal from 'components/UI/Modals/Modal/Modal';
import { useState } from 'react';

const Card = ({ data }) => {
  const [openEditCardModal, setOpenEditCardModal] = useState(false);

  const editCard = () => {
    setOpenEditCardModal(!openEditCardModal);
  };
  const { title, description, priority, deadline } = data;

  const priorityCard = {
    [css.priority_low]: priority === cardPriority.LOW,
    [css.priority_medium]: priority === cardPriority.MEDIUM,
    [css.priority_high]: priority === cardPriority.HIGH,
    [css.priority_without]: priority === cardPriority.WO,
  };

  const isDeadline = date => {
    if (date === '04/03/2024') {
      return true;
    }
    return false;
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
              <span className={css.addition_value}>{deadline}</span>
            </div>
            <div className={css.actions_wrap}>
              {isDeadline(deadline) && (
                <Icon className={css.deadline_icon} id="icon-bell"></Icon>
              )}
              <ul className={css.actions}>
                <li className={css.action_item}>
                  <Button className={css.action_btn}>
                    <Icon className={css.action_btn_icon} id="icon-normal" />
                  </Button>
                </li>
                <li className={css.action_item}>
                  {openEditCardModal && (
                    <Modal openModal={editCard}>
                      <EditCardModal closeModal={editCard} />
                    </Modal>
                  )}
                  <Button className={css.action_btn} onClick={editCard}>
                    <Icon className={css.action_btn_icon} id="icon-pencil" />
                  </Button>
                </li>
                <li className={css.action_item}>
                  <Button className={css.action_btn}>
                    <Icon className={css.action_btn_icon} id="icon-trash" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
