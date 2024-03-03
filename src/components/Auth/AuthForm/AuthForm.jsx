/* // useEffect
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/auth/operations';
import { isLoggedIn } from '../../../redux/auth/selectors'; */

import { useState } from 'react';
import { Form, Formik } from 'formik';
import style from './AuthForm.module.css';
import { authSchema } from '../Schemas/authSchema.js';
import Button from './Button/Button';
import Eye from './Eye/Eye';
import Error from './Error/Error';
import Input from './Input/Input';

import { useDispatch } from 'react-redux';
import {registerUser } from '../../../redux/user/userApi';

const initialValues = {
  email: '',
  password: '',
  name: '',
};

export default function AuthForm({ type }) {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  // const isLogin = useSelector(isLoggedIn);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLogin) navigate('/home', { replace: true });
  // }, [isLogin, navigate]);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (values, { resetForm }) => {
    // await dispatch(type === 'login' ? login(values) : register(values));
    dispatch(registerUser(values));

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
            <Error name="name" />
            <Input type="text" name="name" text="Enter your name" />
          </div>
        )}
        <div className={style.wrap}>
          <Error name="email" />
          <Input type="text" name="email" text="Enter your email" />
        </div>
        <div className={style.wrap}>
          <Error name="password" />
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            text={`${type === 'register' ? 'Create' : 'Confirm'} a password`}
          />
          <Eye toggle={handleTogglePassword} />
        </div>
        <Button type="submit">
          {`${type === 'login' ? 'Log In' : 'Register'} Now`}
        </Button>
      </Form>
    </Formik>
  );
}
