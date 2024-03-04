import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './Card.module.css';

const Card = ({ data }) => {
  const { _id, title, description, priority, deadline } = data;

  return (
    <>
      <div className={css.card_container}>
        <div className={css.card_priority}></div>
        <div className={css.content}>
          <h4 className={css.title}>{title}</h4>
          <p className={css.description}>{description}</p>
          <div className={css.additions_wrap}>
            <div className={css.addition}>
              <span className={css.addition_title}>Priority</span>
              <div className={css.priority_wrap}>
                <div className={css.priority_icon}></div>
                <span className={css.addition_value}>{priority}</span>
              </div>
            </div>
            <div className={css.addition}>
              <span className={css.addition_title}>Deadline</span>
              <span className={css.addition_value}>{deadline}</span>
            </div>
            <div className={css.actions_wrap}>
              <ul className={css.actions}>
                <li className={css.action_item}>
                  <Button className={css.move_card_btn}>
                    <Icon className={css.move_card__icon} id="icon-normal" />
                  </Button>
                </li>
                <li className={css.action_item}>
                  <Button className={css.move_card_btn}>
                    <Icon className={css.move_card__icon} id="icon-pencil" />
                  </Button>
                </li>
                <li className={css.actionItem}>
                  <Button className={css.move_card_btn}>
                    <Icon className={css.move_card__icon} id="icon-trash" />
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
