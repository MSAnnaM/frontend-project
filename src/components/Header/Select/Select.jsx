import React, { useContext } from 'react';
import Select from 'react-select';
import './Select.css';
import { ThemeContext } from 'components/ThemeProvider';
import { useDispatch } from 'react-redux';
import { updateUserTheme } from '../../../redux/user/userApi';

export const SelectTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const THEME_OPTIONS = [
    { value: 'light', label: 'light' },
    { value: 'dark', label: 'dark' },
    { value: 'violet', label: 'violet' },
  ];

  const dispatch = useDispatch();

  const onChangeTheme = event => {
    console.log(event.value);
    dispatch(updateUserTheme(event.value));
    setTheme(event.value);
  };

  return (
    <Select
      classNamePrefix="custom-select"
      onChange={onChangeTheme}
      options={THEME_OPTIONS}
      placeholder={theme}
      isSearchable={false}
    />
  );
};
