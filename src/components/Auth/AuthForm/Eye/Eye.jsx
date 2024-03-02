import style from './Eye.module.css';
import sprite from '../../../../img/icons/sprite.svg';

export default function Eye({ toggle }) {
  return (
    <div className={style.wrapper}>
      <svg width={18} height={18} className={style.icon} onClick={toggle}>
        <use href={`${sprite}#icon-eye`} />
      </svg>
    </div>
  );
}
