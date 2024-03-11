import { Field, Form, Formik, ErrorMessage } from 'formik';
import style from './EditBoardForm.module.css';
import sprite from '../../../img/icons/sprite.svg';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editBoard } from '../../../redux/board/boardApi';
import icons from '../CreateBoardForm/Icons';
import backgrounds from '../CreateBoardForm/Backgrounds';

const validationSchema = Yup.object({
    name: Yup.string().required('Title is required'),
});

const EditBoardForm = ({ props, openModal }) => {
    const dispatch = useDispatch();

    const handleSubmit = async (values, { resetForm }) => {
        console.log(values);
        await dispatch(editBoard({ _id: props._id, ...values }));
        resetForm();
        openModal();
    };

    return (
        <Formik
            initialValues={{ name: props.name, icon: props.icon, background: props.background }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {(formikProps) => (
                <Form className={style.edit_board_wrap}>
                    <h2 className={style.edit_board_title}>Edit board</h2>
                    <div className={style.edit_board_wrap_input}>
                        <Field
                            name="name"
                            type="text"
                            placeholder="Title"
                            className={style.edit_board_input}
                        />
                        <ErrorMessage name="name" component="div" className={style.error_message} />
                    </div>
                    <div className={style.edit_board_wrap_input}>
                        <h2 className={style.edit_board_title_radio}>Icons</h2>
                        <div className={style.edit_board_wrap_icons}>
                            {icons.map(icon => (
                                <label key={icon.id} className={style.create_board_label}>
                                    <Field
                                        type="radio"
                                        name="icon"
                                        value={icon.id}
                                        className={style.edit_board_field}
                                    />
                                    <svg
                                        className={`${style.edit_board_icons} ${formikProps.values.icon === icon.id ? style.radio_semi_stroke : ''}`}
                                        width="18"
                                        height="18"
                                    >
                                        <use href={`${icon.image}`}></use>
                                    </svg>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className={style.edit_board_wrap_input}>
                        <h2 className={style.edit_board_title_radio}>Background</h2>
                        <div className={style.edit_board_wrap_backgrounds}>
                            {backgrounds.map((img, idx) => (
                                <label key={idx} className={`${style.edit_board_label} ${formikProps.values.background === img.id ? '' : style.radio_semi_transparent}`}>
                                    <Field
                                        type="radio"
                                        name="background"
                                        value={`${img.standard}`}
                                        className={style.edit_board_field}
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
                    <button className={style.edit_board_button} type="submit">
                        <div className={style.edit_board_wrap_icon}>
                            <svg
                                className={style.edit_board_plus_icon}
                                width="18"
                                height="18"
                            >
                                <use href={`${sprite}#icon-plus`}></use>
                            </svg>
                        </div>
                        Edit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default EditBoardForm;
