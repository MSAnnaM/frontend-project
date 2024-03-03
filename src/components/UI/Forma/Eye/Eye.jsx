import css from './Eye.module.css';
import sprite from '../../../../img/icons/sprite.svg';

export default function Eye({ toggle }) {
  return (
    <div className={css.wrapper}>
      <svg width={18} height={18} className={css.icon} onClick={toggle}>
        <use href={`${sprite}#icon-eye`} />
      </svg>
    </div>
  );
}
