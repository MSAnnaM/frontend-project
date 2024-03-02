import { ErrorMessage } from 'formik';
import style from './Error.module.css';

export default function Error({ name }) {
  return (
    <ErrorMessage
      name={name}
      render={message => <p className={style['error-message']}>{message}</p>}
    />
  );
}
