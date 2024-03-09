import { Field, Form, Formik, ErrorMessage } from 'formik';
import style from './CreateBoardForm.module.css';
import sprite from '../../../img/icons/sprite.svg';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../../redux/board/boardApi';

const initialValues = {
  title: '',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
});

const CreateBoardForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values)
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
            name="title"
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
          <ErrorMessage
            className={style.error_message}
            name="comment"
            component="div"
          />
          <Field
            className={`${style.help_form_input} ${style.help_form_comment_input}`}
            type="radio"
            name="comment"
            placeholder="Comment"
          />
        </div>
        <div className={style.create_board_wrap_input}>
          <h2 className={style.create_board_title_radio}>Background</h2>
          <ErrorMessage
            className={style.error_message}
            name="comment"
            component="div"
          />
          <Field
            className={`${style.help_form_input} ${style.help_form_comment_input}`}
            type="radio"
            name="comment"
            placeholder="Comment"
          />
        </div>
        <button className={style.create_board_button} type="button">
          <div className={style.create_board_wrap_icon}>
            <svg
              className={style.create_board_plus_icon}
              width="18"
              height="18"
              onClick={handleSubmit}
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
