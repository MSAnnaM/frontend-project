import { NavLink, Outlet } from 'react-router-dom';
import style from './AuthView.module.css';
import { Suspense } from 'react';
import Loader from 'components/UI/Loader/Loader';

export default function AuthView() {
  return (
    <div className={style.box}>
      <div>
        <div className={style.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
            to="register"
          >
            Registration
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : style.link
            }
            to="login"
          >
            Log In
          </NavLink>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
