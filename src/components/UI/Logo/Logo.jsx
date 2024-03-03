import css from './Logo.module.css';
import sprite from '../../../img/icons/sprite.svg';

export default function Logo({ big = '' }) {
  return (
    <div className={`${css.logo}${` ${big && css.big}`}`}>
      <div className={`${css.box}${` ${big && css.big}`}`}>
        <svg className={`${css.icon}${` ${big && css.big}`}`}>
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </div>
      <h1 className={`${css.title}${` ${big && css.big}`}`}>Task Pro</h1>
    </div>
  );
}
