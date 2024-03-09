import Radio from '@mui/material/Radio';
import { Field, Form, Formik } from 'formik';
import style from './AddCardModal.module.css';
import sprite from '../../img/icons/sprite.svg';
import { FormLabel } from '@mui/material';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useState } from 'react';

registerLocale('en-GB', enGB);

export default function AddCardModal() {
  const [selectedValue, setSelectedValue] = useState('a');

  const [startDate, setStartDate] = useState(new Date());

  const handleChange = event => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  const controlProps = item => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={style.calendar} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className={style.box}>
      <h3 className={style.title}>Add card</h3>

      <svg width={18} height={18} className={style.icon_close}>
        <use href={`${sprite}#icon-close`} />
      </svg>

      <Formik>
        <Form className={style.form} autoComplete="off">
          <div className={style['input-box']}>
            <div className={style.wrap}>
              <Field
                className={style.input}
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div className={style.wrap}></div>
            <div className={style.wrap}>
              <textarea
                className={style.text_area}
                name="description"
                placeholder="Description"
              />
            </div>
          </div>
          <div className={style.label_div}>
            <FormLabel
              className={style.label_div}
              id="demo-row-radio-buttons-group-label"
              sx={{
                color: 'rgba(255, 255, 255, 0.50)',
                fontFamily: 'Poppins',
                fontSize: '12px',
                letterSpacing: '-0.24px',
              }}
            >
              Label color
            </FormLabel>

            <div className={style.radio_list}>
              <Radio
                {...controlProps('a')}
                sx={{
                  backgroundColor: '#8FA1D0',
                  color: '#8FA1D0',
                  '&.Mui-checked': {
                    color: '#8FA1D0',
                    backgroundColor: 'transparent',
                  },

                  width: '14px',
                  height: '14px',
                }}
              />
              <Radio
                {...controlProps('b')}
                sx={{
                  backgroundColor: '#E09CB5',
                  color: '#E09CB5',
                  '&.Mui-checked': {
                    color: '#E09CB5',
                    backgroundColor: 'transparent',
                  },

                  width: '14px',
                  height: '14px',
                }}
              />
              <Radio
                {...controlProps('c')}
                sx={{
                  backgroundColor: '#BEDBB0',
                  color: '#BEDBB0',
                  '&.Mui-checked': {
                    color: '#BEDBB0',
                    backgroundColor: 'transparent',
                  },

                  width: '14px',
                  height: '14px',
                }}
              />

              <Radio
                {...controlProps('d')}
                sx={{
                  backgroundColor: ' rgba(255, 255, 255, 0.30)',
                  color: ' rgba(255, 255, 255, 0.30)',
                  '&.Mui-checked': {
                    color: ' rgba(255, 255, 255, 0.30)',
                    backgroundColor: 'transparent',
                  },

                  width: '14px',
                  height: '14px',
                }}
              />
            </div>
          </div>
          <div className={style.calendar_wrap}>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              sx={{
                color: 'rgba(255, 255, 255, 0.50)',
                fontFamily: 'Poppins',
                fontSize: '12px',
                letterSpacing: '-0.24px',
              }}
            >
              Deadline
            </FormLabel>
            <div className={style.calendar_div}>
              <DatePicker
                locale="en-GB"
                selected={startDate}
                onChange={date => setStartDate(date)}
                minDate={new Date()}
                customInput={<CustomInput />}
                dateFormat="MMMM d"
                calendarClassName={style.calendar_color}
              />

              <svg width={18} height={18} className={style.icon_down}>
                <use href={`${sprite}#icon-chevron_down`} />
              </svg>
            </div>
          </div>

          <button className={style.button} type="submit">
            <label htmlFor="file-upload" className={style.icon_plus_div}>
              <svg width={14} height={14} className={style.icon_plus}>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </label>
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
}
