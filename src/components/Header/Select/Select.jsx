import { useState } from 'react';
import sprite from '../../../img/icons/sprite.svg';
import style from './Select.module.css';
import { ThemeModal } from '../ThemeModal/ThemeModal';

export const Select = () => {
  const [isOpen, setisOpen] = useState(false);

  const onClick = () => {
    setisOpen(prev => !prev);
  };

  return (
    <>
      <button type="button" onClick={onClick} className={style.select_button}>
        Theme
        <svg width={16} height={16} className={style.svg_icon}>
          <use href={`${sprite}#icon-chevron_down`}></use>
        </svg>
      </button>

      {isOpen && <ThemeModal />}
    </>
  );
};
