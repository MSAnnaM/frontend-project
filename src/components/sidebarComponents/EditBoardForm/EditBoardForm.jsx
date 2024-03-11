import { Field, Form, Formik, ErrorMessage } from 'formik';
import style from './EditBoardForm.module.css';
import sprite from '../../../img/icons/sprite.svg';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editBoard } from '../../../redux/board/boardApi';
import icons from '../CreateBoardForm/Icons';
import { useState } from 'react';
import backgrounds from '../CreateBoardForm/Backgrounds';

const validationSchema = Yup.object({
    name: Yup.string().required('Title is required'),
});

const EditBoardForm = ({ props, openModal }) => {
    const dispatch = useDispatch();


    const [selectedIcon, setSelectedIcon] = useState(null);
    const [selectedBackground, setSelectedBackground] = useState(null);
    const handleSubmit = async (values, { resetForm }) => {
        console.log(values);

        // Dispatch action to edit board
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
                        {/* Error message for name field */}
                        <ErrorMessage name="name" component="div" className={style.error_message} />
                    </div>
                    {/* Other input fields, e.g., for icon and background */}
                    <div className={style.edit_board_wrap_input}>
                        <h2 className={style.edit_board_title_radio}>Icons</h2>
                        <div className={style.edit_board_wrap_icons}>
                            {icons.map(icon => (
                                <label key={icon.id} className={`${style.create_board_label}`}>
                                    <Field
                                        type="radio"
                                        name="icon"
                                        value={icon.id}
                                        className={style.edit_board_field}
                                        checked={selectedIcon === icon.id}
                                        onChange={() => setSelectedIcon(icon.id)}
                                    />
                                    <svg
                                        className={`${style.edit_board_icons} ${selectedIcon === icon.id ? style.radio_semi_stroke : ''
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
                    <div className={style.edit_board_wrap_input}>
                        <h2 className={style.edit_board_title_radio}>Background</h2>
                        <div className={style.edit_board_wrap_backgrounds}>
                            <label
                                key={'default'}
                                className={`${style.edit_board_thumb_img_placeholder} ${style.edit_board_label
                                    } ${selectedBackground === 'default'
                                        ? ''
                                        : style.radio_semi_transparent
                                    }`}
                            >
                                <Field
                                    type="radio"
                                    name="background"
                                    value={`${sprite}#icon-img_placeholder`}
                                    className={style.edit_board_field}
                                    checked={selectedBackground === 'default'}
                                    onChange={() => setSelectedBackground('default')}
                                />
                                <svg
                                    className={style.edit_board_img_placeholder}
                                    width="16"
                                    height="16"
                                >
                                    <use href={`${sprite}#icon-img_placeholder`}></use>
                                </svg>
                            </label>
                            {backgrounds.map((img, idx) => (
                                <label
                                    key={idx}
                                    className={`${style.edit_board_label} ${selectedBackground === img.id
                                        ? ''
                                        : style.radio_semi_transparent
                                        }`}
                                >
                                    <Field
                                        type="radio"
                                        name="background"
                                        value={`${img.standard}`}
                                        className={style.edit_board_field}
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
                    {/* Submit button */}
                    <button className={style.edit_board_button} type="submit">
                        <div className={style.edit_board_wrap_icon}>
                            <svg
                                className={style.edit_board_plus_icon}
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
            )}
        </Formik>
    );
};

export default EditBoardForm;
