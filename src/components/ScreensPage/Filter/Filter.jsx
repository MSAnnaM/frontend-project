import { Field, Form, Formik } from 'formik';
import css from './Filter.module.css';

const Filter = ({ openModal }) => {
  const currentFilter = 'Low';

  const handleChangeFilter = e => {
    openModal();
  };

  return (
    <div className={css.filter_container}>
      <h2 className={css.title}>Filters</h2>

      <div className={css.filter_wrapper}>
        <Formik
          initialValues={{
            filter: currentFilter,
          }}
        >
          <Form className={css.filter} onChange={handleChangeFilter}>
            <div role="group" className={css.radio}>
              <h3 className={css.filter_title}>Label color</h3>

              <Field
                value="Without"
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="without"
              />
              <label htmlFor="without" className={css.radio_item}>
                <div
                  style={{ backgroundColor: '#ffffff4d' }}
                  className={css.radio_bg}
                ></div>
                Without priority
              </label>
              <Field
                value="Low"
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="low"
              />
              <label htmlFor="low" className={css.radio_item}>
                <div
                  style={{ backgroundColor: '#8fa1d0' }}
                  className={css.radio_bg}
                ></div>
                Low
              </label>
              <Field
                value="Medium"
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="medium"
              />
              <label htmlFor="medium" className={css.radio_item}>
                <div
                  style={{ backgroundColor: '#e09cb5' }}
                  className={css.radio_bg}
                ></div>
                Medium
              </label>
              <Field
                value="High"
                className={css.visually_hidden}
                type="radio"
                name="filter"
                id="high"
              />
              <label htmlFor="high" className={css.radio_item}>
                <div
                  style={{ backgroundColor: '#bedbb0' }}
                  className={css.radio_bg}
                ></div>
                High
              </label>
            </div>
            <label className={css.btn}>
              Show all
              <input
                value={''}
                className={css.visually_hidden}
                type="radio"
                name="filter"
              />
            </label>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Filter;
