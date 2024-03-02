import { Field } from 'formik';
import style from './Input.module.css';

export default function Input({ type, name, text }) {
  return (
    <Field className={style.input} type={type} name={name} placeholder={text} />
  );
}
