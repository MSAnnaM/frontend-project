import Button from 'components/ScreensPage/Button/Button';
import css from './Column.module.css';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';

const Column = () => {
  // const columns = [];

  const columns = [
    {
      _id: 1,
      title: 'First Column',
      cards: [
        {
          _id: 1,
          title: 'First Card',
          description: 'My first card',
          priority: 'Low',
          deadline: '04/03/2024',
        },
        {
          _id: 2,
          title: 'Second Card',
          description: 'My second card',
          priority: 'Medim',
          deadline: '15/04/2024',
        },
        {
          _id: 3,
          title: 'Second Card',
          description: 'My second card',
          priority: 'High',
          deadline: '15/04/2024',
        },
        {
          _id: 4,
          title: 'Second Card',
          description: 'My second card',
          priority: 'Without',
          deadline: '15/04/2024',
        },
      ],
    },
    {
      _id: 1,
      title: 'First Column',
      cards: [
        {
          _id: 1,
          title: 'First Card',
          description: 'My first card',
          priority: 'Low',
          deadline: '15/04/2024',
        },
        {
          _id: 2,
          title: 'Second Card',
          description: 'My second card',
          priority: 'Low',
          deadline: '15/04/2024',
        },
      ],
    },
    {
      _id: 1,
      title: 'First Column',
      cards: [
        {
          _id: 1,
          title: 'First Card',
          description: 'My first card',
          priority: 'Low',
          deadline: '15/04/2024',
        },
        {
          _id: 2,
          title: 'Second Card',
          description: 'My second card',
          priority: 'Low',
          deadline: '15/04/2024',
        },
      ],
    },
  ];

  return (
    <div>
      <ul className={css.column_item}>
        {columns.length !== 0 &&
          columns.map(({ _id, title, cards }) => (
            <li key={_id} className={css.column}>
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
        <li className={css.column}>
          <Button className={css.column_create_btn}>
            <div className={css.column_btn_icon_bg}>
              <Icon className={css.column_btn_icon} id="icon-plus" />
            </div>
            Add another column
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Column;
