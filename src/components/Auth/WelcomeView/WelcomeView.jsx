import { NavLink } from 'react-router-dom';
import style from './WelcomeView.module.css';
// import sprite from './icons/sprite.svg'

export default function WelcomeView() {
  return (
    <div className={style.section}>
      {/* USER-IMG */}
      <div className={style.box}>
        <svg className={style.icon} width={40} height={40}>
          {/* <use href={`${sprite}#icon-logo`} /> */}
        </svg>
        <h1 className={style.title}>Task Pro</h1>
      </div>
      <p className={style.descr}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <div className={style['links-box']}>
        <NavLink to='auth/register' className={style.register}>
          Registration
        </NavLink>
        <NavLink to='auth/login' className={style.login}>
          Log In
        </NavLink>
      </div>
    </div>
  );
}
