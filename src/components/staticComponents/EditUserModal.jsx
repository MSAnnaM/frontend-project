import style from './EditUserModal.module.css';
import sprite from '../../img/icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { authSchema } from '../Auth/Schemas/authSchema.js';
import FormButton from 'components/UI/Buttons/FormButton/FormButton';
import Eye from 'components/UI/Forma/Eye/Eye';
import Error from 'components/UI/Forma/Error/Error';
import Input from 'components/UI/Forma/Input/Input';
import Forma from 'components/UI/Forma/Forma';
import { updateUser } from '../../redux/user/userApi';
// import { updateUserImage } from '../../redux/user/userSlice';
import { userSelect } from '../../redux/user/selectors';

export default function EditUserModal({ openModal }) {
  // const { name, email, password } = useSelector(userSelect);

  // const dispatch = useDispatch();
  // const handleSubmit = data => dispatch(updateUser(data));

  // const [image, setImage] = useState('');

  // const editProfileImage = e => {
  //   const file = e.target.files[0];
  //   setImage(file);
  // };

  const dispatch = useDispatch();
  const { name, email, password } = useSelector(userSelect) || {};
  //  const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  const [avatarURL, setAvatarURL] = useState(null);
  const initialValues = {
    name: name || '',
    email: email || '',
    password: password || '',
    avatarURL: avatarURL,
  };

  // const handleChange = e => {
  //   const { name: fieldName, value } = e.target;
  //   dispatch(updateUser({ name: fieldName, value }));
  // };

  const handleSubmit = data => {
    const formData = new FormData();
    console.log(avatarURL);
    console.log(data.name);
    if (avatarURL) {
      formData.append('file', avatarURL);
    }
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    console.log('FormData:', Object.fromEntries(formData.entries()));

    dispatch(updateUser(formData));
    openModal();
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setAvatarURL(file);
    //  const formData = new FormData();
    // formData.append('file', file);
    // console.log(formData);
    // dispatch(updateUserImage(formData));
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <div className={style.box}>
      <h3 className={style.title}>Edit Profile</h3>

      {/* <svg width={18} height={18} className={style.icon_close}>
        <use href={`${sprite}#icon-close`} />
      </svg> */}

      <div className={style.icon_div}>
        {avatarURL ? (
          <img
            src={URL.createObjectURL(avatarURL)}
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
          onChange={handleFileChange}
          accept="image/*"
          className={style.input_hidden}
        />
      </div>
      <Forma initial={initialValues} schema={authSchema} handle={handleSubmit}>
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
        <FormButton type="submit" onClick={handleSubmit}>
          Send
        </FormButton>
      </Forma>
    </div>
  );
}
