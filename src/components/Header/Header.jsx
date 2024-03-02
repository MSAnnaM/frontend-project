import style from './Header.module.css';
import sprite from '../../img/icons/sprite.svg';
import { UserInfo } from './UserInfo/UserInfo';
import { Select } from './Select/Select';

export const Header = () => {
  return (
    <header className={style.header}>
      <button type="button" className={style.button}>
        <svg width={24} height={24} className={style.burger_menu}>
          <use href={`${sprite}#icon-menu`}></use>
        </svg>
      </button>
      <div className={style.box}>
        <Select />
        <UserInfo />
      </div>
    </header>
  );
};
