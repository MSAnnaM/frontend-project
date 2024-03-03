import css from './AddButton.module.css';
import sprite from '../../../../img/icons/sprite.svg';

export default function AddButton() {
  return (
    <button type="button" className={css['add-button']}>
      <svg className={css.icon} width="20" height="20">
        <use href={`${sprite}#icon-plus`} />
      </svg>
    </button>
  );
}
