import React, { createContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTheme } from '../redux/user/selectors';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const [theme, setTheme] = useState('dark');

  const { theme } = useSelector(getTheme);

  console.log(theme);

  useEffect(() => {
    switch (theme) {
      case 'light':
        document.body.classList.add('light');
        document.body.classList.remove('dark', 'violet');
        break;

      case 'dark':
        document.body.classList.add('dark');
        document.body.classList.remove('light', 'violet');
        break;

      case 'violet':
        document.body.classList.add('violet');
        document.body.classList.remove('light', 'dark');
        break;

      default:
        document.body.classList.add('dark');
        document.body.classList.remove('light', 'violet');
    }
  });

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
