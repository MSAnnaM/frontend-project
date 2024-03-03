import { ErrorMessage } from 'formik';
import css from './Error.module.css';

export default function Error({ name }) {
  return (
    <ErrorMessage
      name={name}
      render={message => <p className={css['error-message']}>{message}</p>}
    />
  );
}
