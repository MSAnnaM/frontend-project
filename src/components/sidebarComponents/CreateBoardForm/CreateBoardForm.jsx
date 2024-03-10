import { Field, Form, Formik, ErrorMessage } from 'formik';
import style from './CreateBoardForm.module.css';
import sprite from '../../../img/icons/sprite.svg';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../../redux/board/boardApi';
import icons from './Icons';
import backgrounds from './Backgrounds';
import { useState } from 'react';

const initialValues = {
  name: '',
  icon: icons[0].id,
  background: backgrounds[0].id,
};

const validationSchema = Yup.object({
  name: Yup.string().required('Title is required'),
});

const CreateBoardForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    await dispatch(createBoard(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.create_bord_wrap}>
        <svg
          className={style.create_board_close_btn}
          width="18"
          height="18"
          onClick={onClose}
        >
          <use href={`${sprite}#icon-close`}></use>
        </svg>
        <h2 className={style.create_board_title}>New board</h2>
        <div className={style.create_board_wrap_input}>
          <ErrorMessage
            className={style.error_message}
            name="name"
            component="div"
          />
          <Field
            className={style.create_board_input}
            type="text"
            name="name"
            placeholder="Title"
          />
        </div>
        <div className={style.create_board_wrap_input}>
          <h2 className={style.create_board_title_radio}>Icons</h2>
          <div className={style.create_board_wrap_icons}>
            {icons.map(icon => (
              <label key={icon.id} className={`${style.create_board_label}`}>
                <Field
                  type="radio"
                  name="icon"
                  value={icon.id}
                  className={style.create_board_field}
                  checked={selectedIcon === icon.id}
                  onChange={() => setSelectedIcon(icon.id)}
                />
                <svg
                  className={`${style.create_board_icons} ${
                    selectedIcon === icon.id ? style.radio_semi_stroke : ''
                  }`}
                  width="18"
                  height="18"
                >
                  <use href={`${icon.image}`}></use>
                </svg>
              </label>
            ))}
          </div>
        </div>
        <div className={style.create_board_wrap_input}>
          <h2 className={style.create_board_title_radio}>Background</h2>
          <div className={style.create_board_wrap_backgrounds}>
            <label
              key={'default'}
              className={`${style.create_board_thumb_img_placeholder} ${
                style.create_board_label
              } ${
                selectedBackground === 'default'
                  ? ''
                  : style.radio_semi_transparent
              }`}
            >
              <Field
                type="radio"
                name="background"
                value={`${sprite}#icon-img_placeholder`}
                className={style.create_board_field}
                checked={selectedBackground === 'default'}
                onChange={() => setSelectedBackground('default')}
              />
              <svg
                className={style.create_board_img_placeholder}
                width="16"
                height="16"
              >
                <use href={`${sprite}#icon-img_placeholder`}></use>
              </svg>
            </label>
            {backgrounds.map((img, idx) => (
              <label
                key={idx}
                className={`${style.create_board_label} ${
                  selectedBackground === img.id
                    ? ''
                    : style.radio_semi_transparent
                }`}
              >
                <Field
                  type="radio"
                  name="background"
                  value={`${img.standard}`}
                  className={style.create_board_field}
                  checked={selectedBackground === img.id}
                  onChange={() => setSelectedBackground(img.id)}
                />
                <img
                  key={idx}
                  src={img.standard}
                  srcSet={`${img.standard} 1x, ${img.retina} 2x`}
                  alt="Background"
                ></img>
              </label>
            ))}
          </div>
        </div>
        <button className={style.create_board_button} type="submit">
          <div className={style.create_board_wrap_icon}>
            <svg
              className={style.create_board_plus_icon}
              width="18"
              height="18"
              onClick={onClose}
            >
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </div>
          Create
        </button>
      </Form>
    </Formik>
  );
};

export default CreateBoardForm;
