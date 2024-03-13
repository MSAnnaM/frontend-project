import Radio from '@mui/material/Radio';
import { Field, Form, Formik } from 'formik';
import style from '../AddCardModal/AddCardModal.module.css';
import sprite from '../../../../img/icons/sprite.svg';
import { FormLabel } from '@mui/material';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCard } from '../../../../redux/card/CardApi';
import { selectCard } from '../../../../redux/card/CardSelectors';

registerLocale('en-GB', enGB);

export default function EditCardModal({ cardId, boardId, initialValues }) {
  // const { title, description, priority, deadline } = useSelector(selectCard);
  // const initialValues = {
  //   title: title,
  //   description: description,
  //   priority: priority,
  //   deadline: deadline,
  // };

  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState(initialValues.priority);

  const [startDate, setStartDate] = useState(initialValues.deadline);
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);

  //   const { title, description, priority, deadline } =
  //     useSelector(selectCard) || {};
  //   const initialState = {
  //     title: title || '',
  //     description: description || '',
  //     priority: selectedValue,
  //     deadline: startDate.getTime(),
  //   };

  useEffect(() => {
    setSelectedValue(initialValues.priority);
    setStartDate(initialValues.deadline);
  }, [initialValues]);

  const handleSubmit = e => {
    e.preventDefault();
    const updateCardData = {
      cardId,
      boardId,
      title,
      description,
      priority: selectedValue,
      deadline: startDate instanceof Date ? startDate.getTime() : null,
    };
    // console.log(cardData);
    dispatch(editCard(updateCardData));
    console.log(dispatch(editCard(updateCardData)));
  };

  const handleChange = e => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'description') {
      setDescription(e.target.value);
    } else {
      setSelectedValue(e.target.value);
    }
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
      <h3 className={style.title}>Edit card</h3>
      <Formik>
        <Form
          initial={initialValues}
          className={style.form}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className={style['input-box']}>
            <div className={style.wrap}>
              <Field
                className={style.input}
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div className={style.wrap}></div>
            <div className={style.wrap}>
              <textarea
                className={style.text_area}
                name="description"
                placeholder="Description"
                value={description}
                onChange={handleChange}
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
                {...controlProps('Low')}
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
                {...controlProps('Medium')}
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
                {...controlProps('High')}
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
                {...controlProps('Without')}
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

          <button className={style.button} type="button" onClick={handleSubmit}>
            <label htmlFor="file-upload" className={style.icon_plus_div}>
              <svg width={14} height={14} className={style.icon_plus}>
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </label>
            Edit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
