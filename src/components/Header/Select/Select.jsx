import React, { useContext } from 'react';
import Select from 'react-select';
import './Select.css';
import { ThemeContext } from 'components/ThemeProvider';

export const SelectTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const THEME_OPTIONS = [
    { value: 'light', label: 'light' },
    { value: 'dark', label: 'dark' },
    { value: 'violet', label: 'violet' },
  ];

  const onChangeTheme = event => {
    console.log(event.value);
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
