import { UserInfo } from './UserInfo';
import sprite from '../../img/icons/sprite.svg';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <button type="button" className={style.button}>
        <svg width={24} height={24} className={style.burger_menu}>
          <use href={`${sprite}#icon-menu`}></use>
        </svg>
      </button>
      <div className={style.box}>
        <SelectElement />
        <UserInfo />
      </div>
    </header>
  );
};
