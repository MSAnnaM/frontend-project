import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import css from './Card.module.css';

const Card = ({ data }) => {
  const { title, description, priority, deadline } = data;

  const isDeadline = date => {
    if (date === '04/03/2024') {
      return true;
    }
    return false;
  };

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
                  <Button className={css.action_btn}>
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
