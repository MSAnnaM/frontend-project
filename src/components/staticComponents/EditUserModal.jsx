import style from './EditUserModal.module.css';
import sprite from '../../img/icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { editSchema } from '../Auth/Schemas/authSchema.js';
import FormButton from 'components/UI/Buttons/FormButton/FormButton';
import Eye from 'components/UI/Forma/Eye/Eye';
import Error from 'components/UI/Forma/Error/Error';
import Input from 'components/UI/Forma/Input/Input';
import Forma from 'components/UI/Forma/Forma';
import { updateUser } from '../../redux/user/userApi';
import { userSelect } from '../../redux/user/selectors';

export default function EditUserModal({ openModal, handleUpdateAvatarURL }) {
  const dispatch = useDispatch();

  const { name, email, password, avatarUrl } = useSelector(userSelect) || {};
  const [avatarURL, setAvatarURL] = useState(null);
  const initialValues = {
    name: name || '',
    email: email || '',
    password: password || '',
    avatarUrl: avatarUrl,
  };


  const handleSubmit = data => {
    const formData = new FormData();
    if (avatarURL) {
      formData.append('file', avatarURL);
    }
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);

    dispatch(updateUser(formData));
    openModal();
    handleUpdateAvatarURL(URL.createObjectURL(avatarURL));
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setAvatarURL(file);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <div className={style.box}>
      <h3 className={style.title}>Edit Profile</h3>
      <div className={style.icon_div}>
        {avatarURL ? (
    <img
      src={URL.createObjectURL(avatarURL)}
      width={68}
      height={68}
      alt="avatar"
    />
  ) : avatarUrl ? (
    <img
      src={avatarUrl}
      className={style.img_avatar}
      alt="avatar"
      width={68}
      height={68}
    />
  ) : (
    <div className={style.icon_user_box}>
      <svg width={68} height={62} className={style.icon_user}>
        <use href={`${sprite}#icon-user`} />
      </svg>
    </div>
  )}
        <label htmlFor="file-upload" className={style.icon_plus_div}>
          <svg width={10} height={10} className={style.icon_plus}>
            <use href={`${sprite}#icon-plus`} />
          </svg>
        </label>

        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className={style.input_hidden}
        />
      </div>
      <Forma initial={initialValues} schema={editSchema} handle={handleSubmit}>
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
