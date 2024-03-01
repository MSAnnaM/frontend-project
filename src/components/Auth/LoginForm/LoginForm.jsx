import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from '../AuthView/AuthView.module.css';
// import sprite from './icons/sprite.svg';
import { login } from '../Schemas/login.js';

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleForSubmit = async (values, { resetForm }) => {
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={login}
      onSubmit={handleForSubmit}
    >
      <Form className={style.form}>
        <div className={style['input-box']}>
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
              placeholder="Confirm a password"
            />
            <div className={style.wrapper}>
              <svg
                width={18}
                height={18}
                className={style.icon}
                onClick={handleTogglePassword}
              >
                {/* <use href={`${sprite}#icon-eye`} /> */}
              </svg>
            </div>
          </div>
        </div>
        <button className={style.button} type="submit">
          Log In Now
        </button>
      </Form>
    </Formik>
  );
}
