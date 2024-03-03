import { Field } from 'formik';
import css from './Input.module.css';

export default function Input({ type, name, text }) {
  return (
    <Field className={css.input} type={type} name={name} placeholder={text} />
  );
}
