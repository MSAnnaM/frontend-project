/* import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../../redux/auth/selectors';
import { useSelector } from 'react-redux'; */

import { NavLink } from 'react-router-dom';
import style from './WelcomeView.module.css';
import ava from '../../../img/programmer.png';
import Logo from 'components/UI/Logo/Logo';

export default function WelcomeView() {
  /* const isAuthorized = useSelector(isLoggedIn);
    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthorized) return navigate('/home');
    }, [navigate, isAuthorized]); */
  return (
    <div className={style.section}>
      <img src={ava} alt="" className={style.image} />
      <Logo big />
      <p className={style.descr}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <div className={style['links-box']}>
        <NavLink to="auth/register" className={style.register}>
          Registration
        </NavLink>
        <NavLink to="auth/login" className={style.login}>
          Log In
        </NavLink>
      </div>
    </div>
  );
}
