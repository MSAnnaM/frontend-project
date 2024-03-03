import style from './EditUserModal.module.css';
import sprite from '../../img/icons/sprite.svg';

import { useState } from 'react';
import { authSchema } from '../Auth/Schemas/authSchema.js';
import FormButton from 'components/UI/Buttons/FormButton/FormButton';
import Eye from 'components/UI/Forma/Eye/Eye';
import Error from 'components/UI/Forma/Error/Error';
import Input from 'components/UI/Forma/Input/Input';
import Forma from 'components/UI/Forma/Forma';

const initialValues = {
  name: 'Nastya',
  email: 'futgfggv',
  password: '6796976976976',
};

export default function EditUserModal() {
  /*   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    setName('Nastya');
    setEmail('futgfggv');
    setPassword('6796976976976');
  }, []); */

  // import { useDispatch } from 'react-redux';
  // import { loginUser, registerUser } from '../../../redux/user/userApi';

  //   const dispatch = useDispatch();
  //   const handleSubmit = values =>
  //     dispatch(type === 'login' ? loginUser(values) : registerUser(values));

  const [image, setImage] = useState('');

  const editProfileImage = e => {
    const file = e.target.files[0];
    setImage(file);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <div className={style.box}>
      <h3 className={style.title}>Edit Profile</h3>

      <svg width={18} height={18} className={style.icon_close}>
        <use href={`${sprite}#icon-close`} />
      </svg>

      <div className={style.icon_div}>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            width={68}
            height={68}
            alt="avatar"
          />
        ) : (
          <svg width={68} height={68} className={style.icon_user}>
            <use href={`${sprite}#icon-user`} />
          </svg>
        )}

        <label htmlFor="file-upload" className={style.icon_plus_div}>
          <svg width={10} height={10} className={style.icon_plus}>
            <use href={`${sprite}#icon-plus`} />
          </svg>
        </label>

        <input
          id="file-upload"
          type="file"
          onChange={editProfileImage}
          accept="image/*"
          className={style.input_hidden}
        />
      </div>
      <Forma initial={initialValues} schema={authSchema} >
        <div className={style.wrap}>
          <Error name="name" />
          <Input type="text" name="name" text={initialValues.name} />
        </div>
        <div className={style.wrap}>
          <Error name="email" />
          <Input type="text" name="email" text={initialValues.email} />
        </div>
        <div className={style.wrap}>
          <Error name="password" />
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            text={initialValues.password}
          />
          <Eye toggle={handleTogglePassword} />
        </div>
        <FormButton type="submit">Send</FormButton>
      </Forma>
    </div>
  );
}
