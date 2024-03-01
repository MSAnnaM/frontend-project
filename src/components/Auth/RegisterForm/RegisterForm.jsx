import { useState } from 'react';
/* // useEffect
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import { isLoggedIn } from '../../../redux/auth/selectors'; */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from '../AuthView/AuthView.module.css';
import sprite from '../../../img/icons/sprite.svg';
import { registerSchema } from '../Schemas/registerSchema.js';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  /*   const dispatch = useDispatch();
  const isLogin = useSelector(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) navigate('/home', { replace: true });
  }, [isLogin, navigate]); */

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleForSubmit = async (values, { resetForm }) => {
    // await dispatch(register(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleForSubmit}
    >
      <Form className={style.form} autoComplete="off">
        <div className={style['input-box']}>
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
                <use href={`${sprite}#icon-eye`} />
              </svg>
            </div>
          </div>
        </div>
        <button className={style.button} type="submit">
          Register Now
        </button>
      </Form>
    </Formik>
  );
}
