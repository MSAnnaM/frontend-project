/* // useEffect
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/auth/operations';
import { isLoggedIn } from '../../../redux/auth/selectors'; */

import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from '../AuthView/AuthView.module.css';
import sprite from '../../../img/icons/sprite.svg';
import { authSchema } from '../Schemas/authSchema.js';

const initialValues = {
  email: '',
  password: '',
  name: '',
};

export default function AuthForm({ type }) {
  const [showPassword, setShowPassword] = useState(false);

  /* const dispatch = useDispatch();
  const isLogin = useSelector(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) navigate('/home', { replace: true });
  }, [isLogin, navigate]); */

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (values, { resetForm }) => {
    // Dispatch login or register based on 'type'
    // await dispatch(type === 'login' ? login(values) : register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={authSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} autoComplete="off">
        {type === 'register' && (
          <div className={style.wrap}>
            <ErrorMessage
              name="name"
              render={message => (
                <p className={style['error-message']}>{message}</p>
              )}
            />
            <Field
              className={style.input}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
        )}
        <div className={style.wrap}>
          <ErrorMessage
            name="email"
            render={message => (
              <p className={style['error-message']}>{message}</p>
            )}
          />
          <Field
            className={style.input}
            type="text"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className={style.wrap}>
          <ErrorMessage
            name="password"
            render={message => (
              <p className={style['error-message']}>{message}</p>
            )}
          />
          <Field
            className={style.input}
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Enter your password"
          />
          <div className={style.wrapper}>
            <svg
              width={18}
              height={18}
              className={style.icon}
              onClick={handleTogglePassword}
            >
              <use href={`${sprite}#icon-eye`} />
            </svg>
          </div>
        </div>
        <button className={style.button} type="submit">
          {type === 'login' ? 'Log In Now' : 'Register Now'}
        </button>
      </Form>
    </Formik>
  );
}
