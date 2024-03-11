import { Field, Form, Formik, ErrorMessage } from 'formik';
import style from './HelpForm.module.css';
import sprite from '../../../img/icons/sprite.svg';
import * as Yup from 'yup';
import { sendHelpEmail } from '../../../redux/user/userApi';
import { useDispatch } from 'react-redux';

const initialValues = {
  email: '',
  comment: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email()
    .required('Email is required')
    .matches(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      'Invalid email format'
    ),
  comment: Yup.string().required('Comment is required'),
});

const HelpForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    // await dispatch(userComment(values));
    await dispatch(sendHelpEmail(values));
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.help_form_wrap}>
        <svg
          className={style.help_form_close_btn}
          width="18"
          height="18"
          onClick={onClose}
        >
          <use href={`${sprite}#icon-close`}></use>
        </svg>
        <h2 className={style.help_form_title}>Need help</h2>
        <div className={style.help_form_wrap_input}>
          <ErrorMessage
            className={style.error_message}
            name="email"
            component="div"
          />
          <Field
            className={style.help_form_input}
            type="text"
            name="email"
            placeholder="Email address"
          />
        </div>
        <div className={style.help_form_wrap_input}>
          <ErrorMessage
            className={style.error_message}
            name="comment"
            component="div"
          />
          <Field
            className={`${style.help_form_input} ${style.help_form_comment_input}`}
            type="text"
            name="comment"
            placeholder="Comment"
            as="textarea"
          />
        </div>
        <button className={style.help_form_button} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default HelpForm;
