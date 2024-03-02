/* // useEffect
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/auth/operations';
import { isLoggedIn } from '../../../redux/auth/selectors'; */

import { useState } from 'react';
import style from './AuthForm.module.css';
import { authSchema } from '../Schemas/authSchema.js';
import FormButton from 'components/UI/Buttons/FormButton/FormButton';
import Eye from 'components/UI/Forma/Eye/Eye';
import Error from 'components/UI/Forma/Error/Error';
import Input from 'components/UI/Forma/Input/Input';
import Forma from 'components/UI/Forma/Forma';

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

  // const handleSubmit = () => await dispatch(type === 'login' ? login(values) : register(values));

  return (
    <Forma initial={initialValues} schema={authSchema}>
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
      <FormButton type="submit">
        {`${type === 'login' ? 'Log In' : 'Register'} Now`}
      </FormButton>
    </Forma>
  );
}
