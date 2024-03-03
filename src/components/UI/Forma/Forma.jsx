import { Form, Formik } from 'formik';
import css from './Forma.module.css';

export default function Forma({ children, initial, schema, handle }) {
  const handleSubmit = async (values, { resetForm }) => {
    handle(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initial}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        {children}
      </Form>
    </Formik>
  );
}
