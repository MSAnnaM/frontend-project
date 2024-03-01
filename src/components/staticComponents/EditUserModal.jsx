import { Field, Form, Formik } from 'formik';
import style from './EditUserModal.module.css';
import sprite from '../../img/icons/sprite.svg';
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

export default function EditUserModal() {
  //   const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setName('Nastya');
    setEmail('futgfggv');
    setPassword('6796976976976');
  }, []);

  const updateData = () => {
    console.log(name, email, password);
  };

  return (
    <div className={style.box}>
      <h3 className={style.title}>Edit Profile</h3>
      <svg width={18} height={18} className={style.icon_close}>
        <use href={`${sprite}#icon-close`} />
      </svg>
      <div className={style.icon_div}>
        <svg width={68} height={68} className={style.icon_user}>
          <use href={`${sprite}#icon-user`} />
        </svg>
        <div className={style.icon_plus_div}>
          <svg width={10} height={10} className={style.icon_plus}>
            <use href={`${sprite}#icon-plus`} />
          </svg>
        </div>
      </div>

      <Formik>
        <Form className={style.form} autoComplete="off">
          <div className={style['input-box']}>
            <div className={style.wrap}>
              <Field
                className={style.input}
                type="text"
                name="name"
                defaultValue={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className={style.wrap}>
              <Field
                className={style.input}
                type="text"
                name="email"
                defaultValue={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className={style.wrap}>
              <Field
                className={style.input}
                type={showPassword ? 'text' : 'password'}
                name="password"
                defaultValue={password}
                onChange={e => setPassword(e.target.value)}
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
          <button className={style.button} type="submit" onClick={updateData}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
